// useEffect nos permite ejecutar un efecto secundario cuando algo suceda en nuestro componente
import {useEffect, useState} from 'react'
import Message from "./message";

const SimpleForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    });
    const {name, email} = form;

    // No se puede ejecutar hooks de manera condicional
/*
    if(true){
        const [state, setState] = useState([]);
    }
*/

    // no importa que cambie vuelvete a ejecutar
    /*  useEffect(() => {
          console.log('hey')
      })*/
    // trabajar por separados las propiedades
    useEffect(() => {
        console.log('hey')
        // hay una funcion que se ejecuta cuando se desmonta el componente
        // el procedimiento parecido a didUnMount
    },[])

    // Cuando cambia el estado form se ejecuta el efecto secundario
    // la primera vez se muestra por que lo cambie
    useEffect(() => {
        console.log('cambio form')
    },[form])

    useEffect(() => {
        console.log('cambio email')
    },[email])

    const handleNameChange = ({target}) => {
        console.log(target.name)
        console.log(target.value)
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <>
            <div>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="tu nombre"
                           autoComplete="off" value={name} onChange={handleNameChange}/>

                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="email@example.com"
                           autoComplete="off" value={email} onChange={handleNameChange}/>

                </div>
                {(name==='123') && <Message/>}
            </div>

        </>

    )
}

export default SimpleForm;
