import { v4 as uuidv4 } from 'uuid';

   export const getDogs = async(breed) =>{
        const url = `https://dog.ceo/api/breed/${breed}/images/random/6`;
        const request = await fetch(url);
        const {message:imgDogs} = await request.json();
        const dogs = imgDogs.map(imgDog=>{
            return {
                uuid:uuidv4(),
                imgUrl:imgDog
            }
        })
       return dogs;
    }