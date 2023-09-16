'use client'

import Image from 'next/image'
import { useEffect, useState } from "react"
import { useBoardStore } from "@/store/BoardStore";
import { Todo, TypedColumn } from "@/typings";
import { XCircleIcon } from "@heroicons/react/20/solid";
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps
 } from "react-beautiful-dnd";
import getUrl from "@/lib/getUrl";


type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps  | null | undefined;
}

function ToDoCard({ todo, index, id, innerRef, dragHandleProps, draggableProps }: Props) {

  const deleteTask = useBoardStore((state)=> state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if(todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);
        if(url) {
          setImageUrl(url.toString());
        }
      }
      fetchImage();
    }
  }, [todo])
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button onClick={() => deleteTask(index, todo, id)} className="text-red-500 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8"/>
        </button>
      </div>
      {/*Add image here...*/}
      {imageUrl && (
        <div className="relative h-full w-full rounded-b-md">
          <Image
            src={imageUrl}
            alt="Task Image"
            width={400}
            height={200}
            className="w-full object-contain rounded-b-md"
          />
        </div>
      )}
    </div>
  )
}

export default ToDoCard;