"use client";

import type { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { type FC } from "react";
import { api } from "~/trpc/react";

interface TodosProp {
  todos: Post[];
}

const Todos: FC<TodosProp> = ({ todos }) => {
  const router = useRouter();
  const deletePost = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <main className="flex max-w-5xl basis-3/5 flex-col gap-4 p-16">
      <h3 className="text-3xl">Todoist Prisma</h3>

      {todos.length === 0 ? (
        <div className="px-6 pt-32 text-center text-2xl">
          No todo items available
        </div>
      ) : (
        <>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between rounded-xl bg-blue-700 px-6 py-3"
            >
              <div>
                <div className="text-lg">{todo.title}</div>
                <small>12-19-2023</small>
              </div>
              <button
                className="cursor-pointer rounded-lg border-2 bg-blue-700 px-4 py-2 text-white"
                onClick={() =>
                  deletePost.mutate({
                    id: todo.id,
                  })
                }
              >
                Delete todo
              </button>
            </div>
          ))}
        </>
      )}
    </main>
  );
};

export default Todos;
