import {useState} from 'react';

// podria incluirse otro objeto para las reglas de validacion
const useForm = (initState = {}) => {
    const [values, setValues] = useState(initState);
    const handleInputChange = ({target}) => {
        console.log(target.name)
        console.log(target.value)
        setValues({
            ...values,
            [target.name]: target.value
        })
    }


    return [values, handleInputChange];
};

export default useForm;
