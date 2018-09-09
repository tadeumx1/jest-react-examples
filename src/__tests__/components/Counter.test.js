import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

describe('Testing Counter Component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(

      <Counter count={5} />

    );

    expect(wrapper).toMatchSnapshot();

    // Mudar o count de 5 para 10

    // Dessa forma ele vai criar dois Snapshots desse componente
    // um quando o valor do count era 5 e outro quando era 10

    wrapper.setProps({ count: 10 });

    expect(wrapper).toMatchSnapshot();

  });

});
