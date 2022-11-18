import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql` ||
    "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      // fetchPolicy: "cache-and-network",
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      // fetchPolicy: "network-only",
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;
