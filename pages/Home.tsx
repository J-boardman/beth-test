import BaseHTML from "../components/BaseHTML";
import { Counter } from "../components/Counter";

export default function HomePage({ count = 0 }) {
  return (
    <BaseHTML title="Home">
      <h1>
        Count at <span id="counter-2">{count}</span>
      </h1>
      <Counter count={count} />
      <button hx-get="/count/json" hx-swap="none" class="btn btn-secondary">GET JSON</button>
    </BaseHTML>
  );
}
