import React from 'react'

const Breeds = ({breed}) => {

    const getDogsFromBreeds = async() =>{
        const url = `https://dog.ceo/api/breed/${breed}/images/random/5`;
        const request = await fetch(url);
        const {message:dogs} = await request.json();
        console.log(dogs);
    }

    getDogsFromBreeds();
    return (
        <div>
            <h3>{breed}</h3>
        </div>
    )
}

export default Breeds
