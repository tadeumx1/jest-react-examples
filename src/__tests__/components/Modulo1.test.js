const modulo1 = require('../../components/Modulo1');

describe('basic feature', () => {

    it('should return the right value', () => {

        expect(modulo1.func1(10)).toBe(11)

    })

    it('func2', () => {

        const cb = jest.fn()

        cb.mockReturnValue(1)

        expect(modulo1.func2(10, cb)).toBe(11)

        // Já verificou caso o Mock foi chamado com o valor certo

        expect(cb.mock.calls[0][0]).toBe(10)

        // Inspecionar caso a chamada foi com valor correto

        // console.log(cb.mock.calls)

    })

})