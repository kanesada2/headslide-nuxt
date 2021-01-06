import { InMemoryCache } from "apollo-cache-inmemory";
export default function (context) {
  return {
    httpLinkOptions: {
      uri: 'http://nosada-hasura.herokuapp.com/v1/graphql',
      credentials: "same-origin",
    },
    cache: new InMemoryCache(),
    connectToDevTools: true,
    context,
  };
}