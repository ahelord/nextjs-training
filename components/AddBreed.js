import { useState } from "react"
import PropTypes from 'prop-types';
// const AddBreed = (props) => { 
// se puede recibir el props pero con la desestructuracion es mas simple obtener los objetos    
const AddBreed = ({ setBreeds }) => {
    /* const [breed, setBreed] = useState()  */
    // salta error por que cambia de un valor no definido a uno definido
    const [breed, setBreed] = useState('')
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setBreed(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // el mismo setState tiene la referencia del estado anterior
        if (breed.trim().length > 2) {

            setBreeds(breeds => {
                if (!breeds.includes(breed)) {
                    return [breed,...breeds ]
                } else {
                    return breeds
                }
            })
            setBreed('')
        }

    }
    return (
        <>
            <h3>Buscar</h3>
            <h4>Ingrese la raza</h4>

            <form onSubmit={handleSubmit}>
                <input type="text" value={breed} onChange={handleInputChange}>
                </input>

            </form>



        </>
    )
}

AddBreed.propTypes = {
    setBreeds: PropTypes.func.isRequired
}
export default AddBreed
