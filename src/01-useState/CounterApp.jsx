import { useState } from 'react';

export const CounterApp = () => {
    const [counters, setCounter] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    });
    const {counter1, counter2, counter3} = counters;

    const onButton1Click = () => {
        setCounter({...counters, counter1: counter1 + 1});
    }

    const onButton2Click = () => {
        setCounter({...counters, counter2: counter2 + 1});
    }

    const onButton3Click = () => {
        setCounter({...counters, counter3: counter3 + 1});
    }

    return (
        <>
            <h1>Counter: {counter1} {counter2} {counter3}</h1>
            <hr />
            <button onClick={onButton1Click}>+1</button>
            <button onClick={onButton2Click}>+1</button>
            <button onClick={onButton3Click}>+1</button>
        </>
  )
}
