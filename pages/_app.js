import "../styles/globals.css";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${quicksand.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
