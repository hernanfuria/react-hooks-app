import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {
    const [counter, setCounter] = useState( initialValue );

    const decrement = (value = 2) => {
        // if (counter === 0) return;
        (counter > 0) && setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const increment = (value = 2) => {
        setCounter(counter + value);
    }

    



    return {
        counter,
        decrement,
        reset,
        increment,
    }
}