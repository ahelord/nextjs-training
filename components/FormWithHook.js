// useEffect nos permite ejecutar un efecto secundario cuando algo suceda en nuestro componente
import {useEffect, useState} from 'react'
import Message from "./message";
import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
    // el poder que tienen los custom hooks para centralizar logica
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const {name, email, password} = formValues;

    useEffect(() => {
            console.log('cambio email')
        }
        , [email])

    // se puede utilizar un custom hook para no estar creando esto por cada formulario que implemente
    /*
        const handleNameChange = ({target}) => {
            console.log(target.name)
            console.log(target.value)
            setForm({
                ...form,
                [target.name]: target.value
            })
        }
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <>
            <h1>Form with custom hook</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="tu nombre"
                           autoComplete="off" value={name} onChange={handleInputChange}/>

                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="email@example.com"
                           autoComplete="off" value={email} onChange={handleInputChange}/>

                </div>

                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="tu password"
                           autoComplete="off" value={password} onChange={handleInputChange}/>

                </div>
                <button type="submit" className="btn-primary">Guardar</button>
            </form>

        </>

    )
}

export default FormWithCustomHook;
