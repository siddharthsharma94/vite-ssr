import React from "react";
import { Counter } from "./_components/Counter";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome lol</h1>
      This page is:
      <ul>
        <li>Rendered to HTML....</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
