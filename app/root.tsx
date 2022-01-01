import type { LinksFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import type { MetaFunction } from "remix";

import tailwindStylesUrl from "./tailwind.css";

export const meta: MetaFunction = () => {
  return { title: "Fullstack Tailwind" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

//Handles all url style references or package
export const links: LinksFunction = () => {
  return [
    {
      //Modern CSS Reset
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset/dist/reset.min.css",
    },
    {
      rel: "stylesheet",
      href: tailwindStylesUrl,
    },
  ];
};
