import type { AppProps } from "next/app";
import "../styles/reset.css";
import "../styles/globals.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "@fontsource/karla/800.css";
import Base from "../layouts/Base";
import client from "../apollo-client";

import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  // initialize apollo client

  return (
    <ApolloProvider client={client}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </ApolloProvider>
  );
}
