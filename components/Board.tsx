'use client'

import { MinusSmallIcon, ViewColumnsIcon } from "@heroicons/react/20/solid";
import { useBoardStore } from "../store/BoardStore";
import { useEffect } from 'react';
import { DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import Column from './Column';
function Board () {
const [board, getBoard, setBoardState] = useBoardStore((state) => [
  state.board,
  state.getBoard,
  state.setBoardState
]);

  useEffect(() => {
    getBoard();
  }, [getBoard])

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result

    // check if user dragged outside of the box, if true return
    if(!destination) return;

    // handle column drag
    if(type === 'column') {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    // handle nested columns
    // necessary to do this as indexes are stored as (i.e 0,1,2,3... etc)
    // need to convert it to the id's with Drag and Drop library
    const columns = Array.from(board.columns);
    const startColIndex = columns[Number(source.droppableId)];
    const endColIndex = columns[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const endCol: Column = {
      id: endColIndex[0],
      todos: endColIndex[1].todos,
    };

    if(!startCol || !endCol) return;

    if(source.index === destination.index && startCol === endCol) return;

    // make a new copy
    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1);

    if(startCol.id === endCol.id) {
      // same col task drag
      newTodos.splice(destination.index, 0, todoMoved);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns })
    } else {
      // moved to a different column
      const movedTodos = Array.from(endCol.todos);
      movedTodos.splice(destination.index, 0, todoMoved);

      const newColumns = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        todos: newTodos
      };

      newColumns.set(startCol.id, newCol);
      newColumns.set(endCol.id, {
        id: endCol.id,
        todos: movedTodos,
      });

      setBoardState({ ...board, columns: newColumns });
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='board' direction='horizontal' type='column'>
        {(provided) =>
          <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
          {...provided.droppableProps}
          ref={provided.innerRef}
          >
            {
              Array.from(board.columns.entries()).map(([id, column], index) => (
                <Column
                  key={id}
                  id={id}
                  todos={column.todos}
                  index={index}
                />
              ))
            }
          </div>
        }
      </Droppable>
    </DragDropContext>
  )
}

export default Board;