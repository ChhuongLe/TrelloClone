import { getTodosGroupedByColumn  } from '@/lib/getTodosGroupedByColumn';
import { TypedColumn, Column, Board, Todo } from "@/typings";
import { create } from 'zustand';
import {databases} from '@/appwrite';

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoinDB: (todo: Todo, columnId: TypedColumn) => void;

  searchString: string;
  setSearchString: (searchstring: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>()
  },

  searchString: "",
  setSearchString: (searchString) => set({ searchString }),

  getBoard: async() => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  updateTodoinDB: async (todo, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTIONS_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  }
}))