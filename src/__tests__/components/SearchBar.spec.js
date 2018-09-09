import React from 'react'
import { render, shallow } from 'enzyme'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'

// O Método render do enzyme renderiza todo o componente em HTML estático é um dos métodos mais simples do Enzyme

describe('SearchBar.jsx', () => {
    it('Should render SearchBar without errors', () => {
        render(<SearchBar onChange={() => {}} defaultValue='default value' />)
    })
})

// O método shallow dá acesso ao estado do componente, podendo inclusive altera-lo, ou até buscar componentes internos e saber qual o estado do mesmo

// Ele vai simular a DOM do React

it('Should init component with defaultValue prop on search state', () => {
    const defaultValueProperty = 'default value'

    // Estamos empacotando o componente para depois ter acesso ao seu estado

    const wrapper = shallow(<SearchBar onChange={() => {}} defaultValue={defaultValueProperty} />)

    expect(defaultValueProperty).toEqual(wrapper.state().search)
})

// Nesse teste estamos tendo certeza se o valor do input de pesquisa é o mesmo do estado

// value={this.state.search}

it('Should have value input equal to the search state value', () => {
    const defaultValueProperty = 'default value'
    const changingValue = 'changing value'

    const wrapper = shallow(<SearchBar onChange={() => {}} defaultValue={defaultValueProperty} />)
    wrapper.setState({ search: changingValue })

    console.log(wrapper.find('input').props().value)

    expect(changingValue).toEqual(wrapper.find('input').props().value)
})

// Nosso próximo teste será para validar se o onChange do input está chamando nossa prop onChange passada como parâmetro

// O jest.useFakeTimers() basicamente irá substituir as implementações 
// dos métodos: setTimeout, clearTimeout, setInterval, clearInterval. 

//Que caso fossem necessários executar no nosso teste precisaríamos forçar um sleep de 300ms (que é bem ruim).

jest.useFakeTimers()

describe('SearchBar.jsx', () => {

    it('Should call onChange prop when onChange from input is called', () => {
        const onChangeMock = jest.fn()
        const valueOnChange = 'changing value'

        const wrapper = shallow(<SearchBar onChange={onChangeMock} defaultValue='any value' />)

        // Estamos simulando a mudança de valor do Input

        wrapper.find('input').simulate('change', { target: { value: valueOnChange }})
        
        // O jest.runOnlyPendingTimers() que como o nome diz, irá executar as funções pendentes (respeitando o clearInterval/clearTimeout)
        
        jest.runOnlyPendingTimers()

        console.log(valueOnChange);

        console.log(onChangeMock.mock.calls[0][0]);

        expect(valueOnChange).toEqual(onChangeMock.mock.calls[0][0])
    })

    // Precisamos garantir que a função passada na prop onChange seja executada apenas quando 
    // o usuário concluir de digitar o que estiver buscando.
    
    it('Should call only one time onChange with the last value prop when input is changed multiples time in sequence', () => {
        
        const onChangeMock = jest.fn()

        const wrapper = shallow(<SearchBar onChange={onChangeMock} defaultValue='any value' />)

        wrapper.find('input').simulate('change', { target: { value: 's' }})
        wrapper.find('input').simulate('change', { target: { value: 'sp' }})
        wrapper.find('input').simulate('change', { target: { value: 'spi' }})
        wrapper.find('input').simulate('change', { target: { value: 'spid' }})
        wrapper.find('input').simulate('change', { target: { value: 'spide' }})
        wrapper.find('input').simulate('change', { target: { value: 'spider' }})

        // Irá executar as funções pendentes

        jest.runOnlyPendingTimers()

        // Estamos checando caso a função onChangeMock só foi chamada uma vez

        expect(1).toEqual(onChangeMock.mock.calls.length)
        expect('spider').toEqual(onChangeMock.mock.calls[0][0])
    })

})