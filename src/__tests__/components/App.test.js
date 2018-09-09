import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../App';

 /* it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */

describe('Testing App Component', () => {

  it('should render correctly', () => {

    const wrapper = shallow(

      <App />

    );

    // O Snapshot é uma maneira de guardar as informações
    // do componente naquele estado de tempo

    // Ele é um histórico do componente e assim você se baseia em 
    // como o componente deveria funcionar

    // O método toMatchSnapshot() espera que o componente deve se comportar
    // da mesma forma quando o Snapshot foi tirado

    // O Snapshot ele avisa das mudanças caso tiver certo é só apertar
    // a letra U para atualizar ele

    expect(wrapper).toMatchSnapshot();

  });

});
