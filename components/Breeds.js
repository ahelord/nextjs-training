import { useEffect,useState } from "react";
import BreedsItem from "./BreedsItem";
import { getDogsFromBreeds } from "../utils/getDogsFromBreeds";

const Breeds = ({breed}) => {
    const [dogs, setDogs] = useState([])
    // Ejecutar cierto codigo de manera condicional
    // Solo quiero que se ejecute la funcion getDogsFromBreeds cuando el codigo se ejecuta una vez
    useEffect(async ()=>{
       const dogs = await getDogsFromBreeds(breed)
       setDogs(dogs)
    },[breed])


    return (
        <>
        <h3>{breed}</h3>
        <div className="card-grid">
        
         
            <div>
               {/*  {imgDogs.map(imgDog => <BreedsItem key={imgDog} imgSrc={imgDog}></BreedsItem>)} */}
                {/* tambien se puede utilizar el operador spreed para enviar todas las propiedades del objeto*/}
                {dogs.map(dog => <BreedsItem key={dog.uuid} {...dog}></BreedsItem>)} 
            </div>
        </div>
    </>
    )
}

export default Breeds
