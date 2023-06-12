import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const MemoHook = () => {
    const {counter, increment} = useCounter(1000)
    const [show, setShow] = useState(true)

    const heavyStuff = (iterationNumber = 100) => {
        console.log(' ')
        for (let i = 0; i < iterationNumber; i++) {
            console.log('asd')
        }
        return `${iterationNumber} iter realizadas`
    }

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
    
    return (
        <>
            <h1>counter MemoHook: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button className="btn btn-primary mt-2" onClick={() => increment()}>+1</button>
            <button className="btn btn-outline-primary mt-2" onClick={() => setShow(!show)}>show/hide</button>
        </>
    )
}
