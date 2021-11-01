import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../app/store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });
  function SafeHydrate({ children }) {
    return (
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : children}
      </div>
    );
  }
  return (
    <Provider store={store}>
      <SafeHydrate>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </SafeHydrate>
    </Provider>
  );
}
