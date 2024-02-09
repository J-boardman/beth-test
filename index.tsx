import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Counter } from "./components/Counter";
import HomePage from "./pages/Home";
import ErrorTestsPage from "./pages/ErrorTestsPage";

const app = new Elysia();

app
  .use(html())
  .use(staticPlugin())
  .state("count", 0)
  .onError(({ set, code, error }) => {
    const { status } = set;
    return (
      <p class={status == 400 ? "text-warning" : "text-error"}>
        {error.message}
      </p>
    );
  })
  // PAGES
  .get("/", ({ store }) => <HomePage count={store.count} />)
  .get("/error-tests", () => <ErrorTestsPage />)
  // APIS
  .group("count", (app) =>
    app
      .post("/increment", ({ store }) => {
        store.count++;
        return <Counter count={store.count} updateOtherUI />;
      })
      .post("/decrement", ({ store }) => {
        if (store.count > 0) store.count--;
        return <Counter count={store.count} updateOtherUI />;
      })
      .post("/reset", async ({ store }) => {
        store.count = 0;
        return <Counter count={store.count} updateOtherUI />;
      })
      .get("/json", ({ store }) => {
        return { count: store.count };
      })
  )
  .get("/clicked", ({ set, query }) => {
    switch (Number(query.response)) {
      case 500:
        set.status = 500;
        throw new Error("Fatal error!");
      case 400:
        set.status = 400;
        throw new Error("Warning!");
    }
    return <p class="text-success">Success!</p>;
  })
  .listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
