import { api } from "~/trpc/server";
import Todos from "./_components/Todos";
import Form from "./_components/Form";

export default async function Home() {
  const todos = await api.post.getAll.query();

  return (
    <div className="flex text-white">
      <Todos todos={todos} />
      <Form />
    </div>
  );
}
