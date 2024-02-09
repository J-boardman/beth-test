import BaseHTML from "../components/BaseHTML";

export default function ErrorTestsPage() {
  return (
    <BaseHTML title="Error Tests">
      <div>
        <article class="flex gap-4">
          <button
            hx-swap="innerHTML"
            hx-get="/clicked"
            hx-target="#outcome"
            class="btn btn-success"
          >
            Test 200 response
          </button>
          <button
            hx-swap="innerHTML"
            hx-get="/clicked?response=400"
            hx-target-error="#outcome"
            class={"btn btn-warning"}
          >
            Test 400 response
          </button>
          <button
            hx-swap="innerHTML"
            hx-get="/clicked?response=500"
            hx-target-error="#outcome"
            class={"btn btn-error"}
          >
            Test 500 response
          </button>
          <button></button>
        </article>
        <div id="outcome" class="text-success"></div>
      </div>
    </BaseHTML>
  );
}
