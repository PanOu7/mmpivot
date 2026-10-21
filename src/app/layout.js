import { Toaster } from "sonner";
import "../styles/globals.css";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <NextTopLoader color="rgb(43 127 255)" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
