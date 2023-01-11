import "../styles/globals.css";
import { Quicksand } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
