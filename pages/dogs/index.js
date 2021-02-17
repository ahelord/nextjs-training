import { useState } from "react";
import AddBreed from '../../components/AddBreed';
import Breeds from "../../components/Breeds";
import Head from 'next/head'

const Dogs = () => {
    //const breeds = ['akita', 'boxer', 'bulldog'] 
    const [breeds, setBreeds] = useState(['dalmatian'] )

    const handleAdd = ()=>{
       // setBreeds(breeds.push(...breeds)) // salta error TypeError: breeds.map is not a function, no sirve por que reemplaza el estado anterior, debe crear un nuevo objeto
       setBreeds([...breeds,'bullterrier'])

    }
    return <>
       <Head>
        <title>Dogs</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
      </Head>
        <h1>Dogs</h1>
        <AddBreed setBreeds={setBreeds}></AddBreed>
        <hr />
     {/*    <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                //for(const breed of breeds)
                //error no se puede esto
                breeds.map(breed=><Breeds key={breed} breed={breed}></Breeds>)
                   // return <li>{breed}</li>
                   // error anterior por falta de key, no colocar el valor del indice
                    // sirve la key si no hay duplicados.
           
            }
        </ol>
    </>
}
export default Dogs;