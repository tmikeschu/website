import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import React from "react";
import { ColorProvider } from "../src/components/color-context";

function Website({ Component, pageProps }: AppProps) {
  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default Website;
