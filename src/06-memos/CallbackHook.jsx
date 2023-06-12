import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => {
        setCounter((value) => value + 1);
    }, [])

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <ShowIncrement increment={increment} />
        </>
  )
}
