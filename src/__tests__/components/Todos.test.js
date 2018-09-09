import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Todos from '../../components/Todos';

import configureStore from 'redux-mock-store';
const mockStore = configureStore();

const initialState = {

  todos: [

    { id: 0, text: 'Fazer café'},
    { id: 0, text: 'Acessar o slack'},
    { id: 0, text: 'Ver RocketLive'},

  ],

};

// Isso é o equivalente a declarar nossos Reducers

const store = mockStore(initialState);

describe('Testing Todos Component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(

      <Todos />,

      // Passando store pelo contexto do React
      { context: { store }}

    ).dive();

    expect(wrapper).toMatchSnapshot();

  });

});
