import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const httplink = new HttpLink({
    uri : "http://48p1r2roz4.sse.codesandbox.io",
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httplink]),
});