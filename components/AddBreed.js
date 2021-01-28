import { useState } from "react"

const AddBreed = () => {
    const [breed, setBreed] = useState('')
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setBreed(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <h3>Ingrese su raza</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" value={breed} onChange={handleInputChange}>
                </input>

            </form>



        </>
    )
}

export default AddBreed
