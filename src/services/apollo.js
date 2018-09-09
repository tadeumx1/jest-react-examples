import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({

    uri: 'https://api.graph.cool/simple/v1/cjlqvjqg45aub01757j0syyf7'

});

const client = new ApolloClient({

    link: httpLink,
    cache: new InMemoryCache(),

});

/* const wsLink = new WebSocketLink({

    uri: 'wss://subscriptions.us-west-2.graph.cool/v1/cjlqvjqg45aub01757j0syyf7',
    options: { reconnect: true }

}); */

export default client;