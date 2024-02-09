import Navbar from "./Navbar";

export default function Header({ title = "Title" }) {
  return (
    <header class="bg-base-200 h-16 flex justify-between px-4 items-center">
      <a href="/" class="text-4xl">{title}</a>
      <Navbar />
    </header>
  );
}
