import {useState} from 'react';
import PropTypes from 'prop-types';

/*
 * Const AddBreed = (props) => {
 * se puede recibir el props pero con la desestructuracion es mas simple obtener los objetos
 */
function AddBreed ({setBreeds}) {

	/* Const [breed, setBreed] = useState()  */
	// Salta error por que cambia de un valor no definido a uno definido
	const [
			breed,
			setBreed
		] = useState(''),
	 handleInputChange = (event) => {

			console.log(event.target.value);
			setBreed(event.target.value);

		},
	 handleSubmit = (event) => {

			event.preventDefault();
			// El mismo setState tiene la referencia del estado anterior
			if (breed.trim().length > 2) {

				setBreeds((breeds) => {

					if (!breeds.includes(breed)) {

						return [
							breed,
							...breeds
						];

					}

					return breeds;

				});
				setBreed('');

			}

		};

	return (
		<>
			<h3>
   			 Buscar
			</h3>

			<h4>


				      Ingrese la raza
			</h4>

			<form onSubmit={handleSubmit}>
				<input
					onChange={handleInputChange}
					type="text"
					value={breed}
				/>

			</form>


		</>
	);

}

AddBreed.propTypes = {
	'setBreeds': PropTypes.func.isRequired
};
export default AddBreed;
