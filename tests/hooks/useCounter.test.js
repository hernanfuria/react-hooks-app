const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en useCounter', () => { 
    test('debe retornar valores por defecto', () => { 
        const {result} = renderHook(() => useCounter())
        const {counter, decrement, reset, increment} = result.current

        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
     })

    test('debe generar counter con valor de 100', () => { 
        const {result} = renderHook(() => useCounter(100))
        const {counter, decrement, reset, increment} = result.current

        expect(counter).toBe(100)
    })

    test('debe incrementar el contador', () => { 
        const {result} = renderHook(() => useCounter(100))
        const {counter, decrement, reset, increment} = result.current

        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(103)
    })

    test('debe decrementar el contador', () => { 
        const {result} = renderHook(() => useCounter(100))
        const {counter, decrement, reset, increment} = result.current

        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(97)
    })

    test('debe resetear el contador', () => { 
        const {result} = renderHook(() => useCounter(100))
        const {counter, decrement, reset, increment} = result.current

        act(() => {
            increment();
            reset();
        })

        expect(result.current.counter).toBe(100)
    })
 })