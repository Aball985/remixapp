import { Link, useLoaderData, LinksFunction, LoaderFunction } from "remix";
import { db } from "~/utils/db.server";

//Typesafety for call
type LoaderData = {
  jokeListItems: Array<{ id: string; name: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    jokeListItems: await db.joke.findMany({
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" },
    }),
  };
  return null;
};

export default function JokesRoute() {
  const data = useLoaderData<LoaderData>();
  if (data) {
    return (
      <div>
        <h1>Jokes Page</h1>
        {data.jokeListItems.map((joke) => (
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  First
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Last
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Handle
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {joke.id}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {joke.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Otto
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    );
  }
  if (!data) {
    return<div>Loading...</div>;
  }
}
