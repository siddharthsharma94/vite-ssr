// /pages/movies.page.js
// Environment: Browser, Node.js
import React from "react";

export { Page };

// In our `render()` and `hydrate()` functions above, we pass `pageContext.pageProps` to `Page`
function Page(pageProps) {
  const { movies } = pageProps;
  return (
    <>
      {movies.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}
