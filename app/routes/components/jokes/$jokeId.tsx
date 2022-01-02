import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = ({ params }) => {
  return params.jokeId;
};

export default function JokeIdRoute() {
  let intjokeId = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl">Hello Joke number {intjokeId}</h1>
    </div>
  );
}
