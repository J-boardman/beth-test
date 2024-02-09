export function Counter({ count = 0, updateOtherUI = false }) {
  return (
    <div id="counter" class="flex gap-4 items-center">
      <DecrementCountButton count={count} />
      <Count count={count} updateOtherUI={updateOtherUI} />
      <IncrementCountButton />
      <ResetCountButton />
    </div>
  );
}

export function Count({ count = 0, updateOtherUI = false }) {
  return (
    <>
      <p id="counter">Count: {count}</p>
      {updateOtherUI ? (
        <span id="counter-2" hx-swap-oob="true">
          {count}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}

export function IncrementCountButton() {
  return (
    <button
      class="btn btn-primary no-animation"
      hx-post="/count/increment"
      hx-target="#counter"
    >
      +
    </button>
  );
}

export function DecrementCountButton({ count = 0 }) {
  return (
    <button
      class="btn btn-primary no-animation"
      hx-post="/count/decrement"
      hx-target="#counter"
      disabled={!count}
    >
      -
    </button>
  );
}

export function ResetCountButton() {
  return (
    <button
      hx-swap="outerHTML"
      hx-target="#counter"
      hx-post="/count/reset"
      class="btn btn-primary no-animation"
    >
      Reset
    </button>
  );
}
