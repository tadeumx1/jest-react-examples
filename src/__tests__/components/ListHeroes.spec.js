import React from 'react'
import { render, shallow, mount } from 'enzyme'
import ListHeroes from '../../components/ListHeroes/ListHeroes'
import SearchBar from '../../components/SearchBar/SearchBar'

// O Método render do enzyme renderiza todo o componente em HTML estático é um dos métodos mais simples do Enzyme

describe('ListHeroes.jsx', () => {
    it('Should render ListHeroes with SearchBar without errors', () => {
        const wrapper = render(<ListHeroes heroesGateway={{}} />)
    })
})

// ComponentDidMount

// Precisamos garantir que quando o componente for iniciado, ou o evento componentDidMount 
// for chamado, ele busque todos os heróis conforme o estado inicial da busca.

describe('ListHeroes.jsx', () => {
    const resultGetHeroesByName = [
        {
            id: 1,
            name: 'Iron man',
            thumbnail: {
                path: 'http://iron-man/',
                extension: 'png'
            }
        },
        {
            id: 2,
            name: 'Captain America',
            thumbnail: {
                path: 'http://captain-america/',
                extension: 'png'
            }
        }
    ]

    const heroesGatewayMock = {
        getHeroesByName: jest.fn().mockImplementation(() => (
            Promise.resolve(resultGetHeroesByName))
        )
    }

    beforeEach(() => {
        heroesGatewayMock.getHeroesByName.mockClear()
    })
    
    it('Should call getHeroesByName with initial search state and save on state when component was rendered', () => {
        const wrapper = mount(<ListHeroes heroesGateway={heroesGatewayMock} />)

        expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)

        expect(wrapper.state().search).toEqual(heroesGatewayMock.getHeroesByName.mock.calls[0][0])
        return heroesGatewayMock.getHeroesByName().then(() => {
            expect(resultGetHeroesByName).toEqual(wrapper.state().heroes)
        })

    })

    // É preciso garantir que sempre que o valor de search no estado do componente for atualizado, e apenas quando 
    // for um novo valor, ele deve buscar os dados novamente na API da Marvel.

    /* it('Should call getHeroesByName when search state was updated', () => {

        const searchValue = 'different-value'
        const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

        wrapper.setState({ search: searchValue })

        expect(1).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)
        return heroesGatewayMock.getHeroesByName().then(() => {
            expect(resultGetHeroesByName).toEqual(wrapper.state().heroes)
        })

    }) */

    /* it('Should not call getHeroesByName when search state was updated with the same value', () => {

        const wrapper = shallow(<ListHeroes heroesGateway={heroesGatewayMock} />)

        wrapper.setState({ search: wrapper.state().search })

        expect(0).toEqual(heroesGatewayMock.getHeroesByName.mock.calls.length)

    }) */

})