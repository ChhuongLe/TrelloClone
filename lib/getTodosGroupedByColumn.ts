import { databases } from "@/appwrite"
import { TypedColumn, Column } from "@/typings";
import { access } from "fs";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTIONS_ID!
  )

  const todos = data.documents;

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
  }, new Map<TypedColumn, Column>());

  console.log(columns)
}