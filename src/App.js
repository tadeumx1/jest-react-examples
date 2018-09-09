import React, { Component } from 'react';
import { Provider } from 'react-redux';

// import './App.css';

import store from './store';

import { ApolloProvider } from 'react-apollo';

import apolloClient from './services/apollo';

import TodoList1 from './components/TodoList1';

import Todos from './components/Todos';

class App extends Component {
  render() {
    return (

      <ApolloProvider client={apolloClient}>

      <Provider store={store}>

        <TodoList1 />

      </Provider>

      </ApolloProvider>

    );
  }
}

export default App;
