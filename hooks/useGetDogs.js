/*
 * Los Hooks no son mas que funciones
 * los custom hooks funciona como funcional components
 */
import {useEffect, useState} from 'react';
import {getDogs} from '../utils/getDogs';

const useGetDogs = (breed) => {

	const [
		state,
		setState
	] = useState({
		'data': [],
		'loading': true
	});


	useEffect(
		async () => {

			const dogs = await getDogs(breed);

			console.table(dogs);
			setTimeout(
				() => {

					setState({
						'data': dogs,
						'loading': false
					});

				},
				2000
			);

		},
		[breed]
	);

	/*
	 *     SetTimeout(() => {
	 *         setState({
	 *             data:[1,2,3,4],
	 *             loading:false
	 *         })
	 *     }, 3000);
	 */

	return state;

};

export default useGetDogs;
