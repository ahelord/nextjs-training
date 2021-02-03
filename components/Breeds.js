import { useEffect,useState } from "react";
import BreedsItem from "./BreedsItem";
import { v4 as uuidv4 } from 'uuid';

const Breeds = ({breed}) => {
    const [dogs, setDogs] = useState([])
    // Ejecutar cierto codigo de manera condicional
    // Solo quiero que se ejecute la funcion getDogsFromBreeds cuando el codigo se ejecuta una vez
    useEffect(()=>{
        getDogsFromBreeds()
    },[])
    const getDogsFromBreeds = async() =>{
        const url = `https://dog.ceo/api/breed/${breed}/images/random/6`;
        const request = await fetch(url);
        const {message:imgDogs} = await request.json();
        const dogs = imgDogs.map(imgDog=>{
            return {
                uuid:uuidv4(),
                imgUrl:imgDog
            }
        })
        console.log(dogs);
        setDogs(dogs)
        console.log(imgDogs)
    }

    return (
        <div>
            <h3>{breed}</h3>
         
            <div>
               {/*  {imgDogs.map(imgDog => <BreedsItem key={imgDog} imgSrc={imgDog}></BreedsItem>)} */}
                {/* tambien se puede utilizar el operador spreed para enviar todas las propiedades del objeto*/}
                {dogs.map(dog => <BreedsItem key={dog.uuid} {...dog}></BreedsItem>)} 
            </div>
        </div>
    )
}

export default Breeds
