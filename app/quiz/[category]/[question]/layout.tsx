import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Question</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
