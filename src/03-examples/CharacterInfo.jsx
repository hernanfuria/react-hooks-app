import { useLayoutEffect, useRef, useState } from "react";

export const CharacterInfo = ({name, image, gender, status, episode}) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0})
    
    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})
    }, [])
    
    const episodesAsText = () => {
        let t = '';
        for (const ep of episode) {
            t += ` ${ep}`;
        }
        return t;
    }
    
    return (
        <div ref={pRef} className="char-info" style={{display: 'grid'}}>
            <h1>{name}</h1>
            <img src={image} />
            <p>{gender} | {status}</p>
            {episodesAsText()}
            <code>{JSON.stringify(boxSize)}</code>
        </div>
    )
}
