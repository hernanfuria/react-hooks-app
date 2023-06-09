import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
// import { Message } from './Message';

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onFormReset, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const {username, email, password} = formState;

    return (
    <>
        <h1>FormWithCustomHook</h1>
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

        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            onChange={onInputChange}
            value={password}
        />

        <button className="btn btn-primary mt-2" onClick={onFormReset}>Borrar</button>
        
    </>
    )
}
