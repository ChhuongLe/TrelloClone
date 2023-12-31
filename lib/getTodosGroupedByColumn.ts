import { databases } from "@/appwrite"
import { TypedColumn, aColumn, Board } from "@/typings";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTIONS_ID!
  )

  const todos = data.documents;

  // transform data from array to key value sorting todos, inprogress, and complete
  const columns = todos.reduce((acc, todo) => {
    if(!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: []
      })
    }
    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      // get image if it exists on the todo
      ...(todo.image && { image: JSON.parse(todo.image) })
    });

    return acc;
  }, new Map<TypedColumn, aColumn>());

  // if columns does not have inprogress, todo, and done, add them with empty todos
  const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];
  for(const columnType of columnTypes) {
    if(!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        todos: [],
      });
    }
  }

  // sort columns by column type
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort((a,b)=> (
      columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    ))
  );

  const board: Board = {
    columns: sortedColumns
  }

  return board;
}