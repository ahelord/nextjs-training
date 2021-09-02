import {useState} from 'react';

// Podria incluirse otro objeto para las reglas de validacion

// Recibe propiedades

const useForm = (initState = {}) => {

	const [
			values,
			setValues
		] = useState(initState),

	 reset = () => {

			setValues(initState);

		},
	 handleInputChange = ({target}) => {

			console.log(target.name);
			console.log(target.value);
			setValues({
				...values,
				[target.name]: target.value
			});

		};


	return [
		values,
		handleInputChange,
		reset
	];

};

export default useForm;
