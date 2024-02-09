import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: JSX.Element[] | JSX.Element;
  title?: string;
};

export default function BaseHTML({ children, title }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Counter app" />
        <link rel="stylesheet" href="/public/output.css" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/preload.js"></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>

        <title>Document</title>
      </head>

      <body hx-ext="response-targets" class="flex flex-col min-h-dvh">
        <Header title={title} />
        <main class="flex-1 max-w-6xl mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
