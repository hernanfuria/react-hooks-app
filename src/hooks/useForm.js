import { useState } from 'react'

export const useForm = (initialValue = {}) => {
    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({target}) => {
        const {name, value} = target;  // name of input that sends the event
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onFormReset = () => {
        setFormState(initialValue);
    };

    return {
        ...formState,
        formState, 
        onInputChange,
        onFormReset,
    }
}
