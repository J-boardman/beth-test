//@ts-nocheck
export default function Navbar() {
  return (
    <nav hx-ext="preload" hx-boost="true">
      <ul class={"flex gap-4"} preload>
        <li><a href="/">Home</a></li>
        <li><a href="/error-tests">Error Tests</a></li>
      </ul>
    </nav>
  );
}
