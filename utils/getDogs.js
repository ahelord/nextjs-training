import {v4 as uuidv4} from 'uuid';

export const getDogs = async (breed) => {

	const url = `https://dog.ceo/api/breed/${breed}/images/random/6`,
	 request = await fetch(url),
	 {'message': imgDogs} = await request.json(),
	 dogs = imgDogs.map((imgDog) => ({
			'uuid': uuidv4(),
			'imgUrl': imgDog
		}));

	return dogs;

};
