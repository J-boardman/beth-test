export default function Footer() {
  return (
    <footer class="bg-base-200 h-12 flex justify-between items-center px-4">
      <p class="text-2xl">Copyright {new Date().getFullYear()}</p>
      <p class="text-lg">
        This app was made by:{" "}
        <a
          class="text-info link link-hover"
          href="https://github.com/J-boardman"
        >
          JJDev
        </a>
      </p>
    </footer>
  );
}
