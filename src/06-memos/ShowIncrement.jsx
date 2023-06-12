export const ShowIncrement = ({increment}) => {
    console.log('ShowIncrement ejecutado')

    return (
        <button className="btn btn-primary" onClick={() => increment()}>Increment</button>
    )
}
