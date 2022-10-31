import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Summary</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
