import "@/styles/globals.css";
import type { AppProps } from "next/app";
import spriteConfigContext from "../context/spriteConfigContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <spriteConfigContext.Provider
      value={{
        fps: 8,
      }}>
      <Component {...pageProps} />
    </spriteConfigContext.Provider>
  );
}
