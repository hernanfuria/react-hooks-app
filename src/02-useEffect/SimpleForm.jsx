import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;  // name of input that sends the event
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        // console.log('useEffect se ejecuta siempre que se renderize')
    });
    useEffect(() => {
        // console.log('useEffect se ejecuta solo la primera vez')
    }, []);
    useEffect(() => {
        // console.log('formState cambió')
    }, [formState]);
    useEffect(() => {
        // console.log('email cambió')
    }, [email]);

    return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control mt-2"
            placeholder="Username"
            name="username"
            onChange={onInputChange}
            value={username}
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Username@email.com"
            name="email"
            onChange={onInputChange}
            value={email}
        />
        {
            (username === 'asd') && <Message />
        }
        
    </>
    )
}
