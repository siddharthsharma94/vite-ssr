// /pages/movies.page.server.js
// Environment: Node.js

import fetch from "node-fetch";

export { addPageContext }
// Tell `vite-plugin-ssr` to make `pageContext.pageProps` available in the browser.
// Make sure that `pageContext.pageProps` is serializable: `vite-plugin-ssr` will
// serialize and pass `pageContext.pageProps` to the browser.
export const passToClient = ['pageProps']

async function addPageContext(pageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let movies = await response.json()
  // We could also `return { movies }` but we use an object `pageProps` as convenience.
  const pageProps = { movies }
  return { pageProps }
}
