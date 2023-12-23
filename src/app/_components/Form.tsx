"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { api } from "~/trpc/react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setLoading(false);
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    setLoading(true);
    createPost.mutate({
      title,
    });
  };

  return (
    <form className="flex basis-2/5 flex-col gap-6 p-16" onSubmit={onSubmit}>
      <h3 className="text-3xl">New Todo</h3>
      <input
        className="rounded-lg px-4 py-2 text-black"
        placeholder="Enter todo title here"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        type="submit"
        className="cursor-pointer self-end rounded-lg border-2 border-purple-600 px-4 py-2 text-purple-600"
      >
        {loading ? "Adding" : "Add Todo"}
      </button>
    </form>
  );
};

export default Form;
