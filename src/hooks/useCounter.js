import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    const [counter, setCounter] = useState( initialValue );

    const decrement = (value = 1) => {
        // if (counter === 0) return;
        (counter > 1) && setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    



    return {
        counter,
        decrement,
        reset,
        increment,
    }
}