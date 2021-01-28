import { useState } from "react";
import AddBreed from '../../components/AddBreed';

const Dogs = () => {
    //const breeds = ['akita', 'boxer', 'bulldog'] 
    const [breeds, setBreeds] = useState(['akita', 'boxer', 'bulldog'] )

    const handleAdd = ()=>{
       // setBreeds(breeds.push(...breeds)) // salta error TypeError: breeds.map is not a function, no sirve por que reemplaza el estado anterior, debe crear un nuevo objeto
       setBreeds([...breeds,'bullterrier'])

    }
    return <>
        <h2>Dogs</h2>
        <AddBreed></AddBreed>
        <hr />
     {/*    <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                //for(const breed of breeds)
                //error no se puede esto
                breeds.map(breed=>{
                   // return <li>{breed}</li>
                   // error anterior por falta de key, no colocar el valor del indice
                   return <li key={breed}>{breed}</li> // sirve la key si no hay duplicados.
                })
            }
        </ol>
    </>
}
export default Dogs;