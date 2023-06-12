import { useCounter, useFetch } from "../hooks";
import { CharacterInfo, LoadingCharacter } from "./";

export const MultipleCustomHooks = () => {
    const {counter, decrement, reset, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    
    // console.log(data, isLoading, hasError);

    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />

            {
                isLoading
                ? <LoadingCharacter />
                : <CharacterInfo name={data.name} image={data.image} gender={data.gender} status={data.status} />

            }

            <hr />
            <button className="btn btn-primary" disabled={isLoading} onClick={() => decrement()}>-1</button>
            <button className="btn btn-primary" disabled={isLoading} onClick={reset}>Reset</button>
            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment()}>+1</button>
        </>
  )
}
