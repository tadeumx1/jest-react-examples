import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TodoList from '../../components/TodoList';

describe('Testing Todos Component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(

      <TodoList />,

    )

    expect(wrapper).toMatchSnapshot();

  });

});

/* describe('Testing Todos Component Renderer', () => {

  it('should render correctly with renderer', () => {

    const tree = renderer.create(<TodoList />).toJSON()
    expect(tree).toMatchSnapshot();

  });

}); */
