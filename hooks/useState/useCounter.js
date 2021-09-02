/*
 * Hook no es mas que una simple funcion
 * hook useState
 */
import {useState} from 'react';
export const useCounter = (initialState = 10) => {

	const [
			counter,
			setCounter
		] = useState(initialState),
	 increment = (factor = 1) => {

			setCounter(Number(counter) + factor);

		},
	 decrement = (factor = 1) => {

			setCounter(counter - factor);

		},
	 reset = () => {

			setCounter(initialState);

		};

	console.log(counter);

	return {
		counter,
		increment,
		decrement,
		reset
	};

};
