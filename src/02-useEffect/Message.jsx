import { useEffect } from "react"

export const Message = () => {
    const onMouseMove = ({x, y}) => {
        console.log({x, y})
    }

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove)
    
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>Este usuario ya esxiste</h3>
        </>
    )
}
