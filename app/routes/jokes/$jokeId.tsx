import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

//Access URL Params
export let loader: LoaderFunction = ({ params }) => {
  return params.jokeId;
};

export default function JokesIdRoute() {
  let jokeId = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl">Hello Joke number {jokeId}</h1>
    </div>
  );
}
