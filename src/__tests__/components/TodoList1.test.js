import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ApolloProvider } from 'react-apollo';

import apolloClient from '../../services/apollo';

import { TodoList1 } from '../../components/TodoList1';

describe('Testing Todos Component', () => {
  it('should render correctly', () => {

    const wrapper = shallow(

      <TodoList1 allTodoes={
          [
            {
              "id": "cjlsbtne80tg50182ep34ielv",
              "text": "Fazer café"
            },
            {
              "id": "cjlsbtttz0tg90182jhya4xs2",
              "text": "Estudar GraphQL"
            }
          ]
        }/>


    )
    expect(wrapper).toMatchSnapshot();

  });

});
