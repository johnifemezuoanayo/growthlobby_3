"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
  ApolloNextAppProvider
} from "@apollo/client-integration-nextjs";
import { ENDPOINT } from "../constant/variables";

function makeClient() {
  const httpLink = new HttpLink({
    uri: ENDPOINT,
  });


  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}


export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
