// UseEffect nos permite ejecutar un efecto secundario cuando algo suceda en nuestro componente
import {useEffect, useState} from 'react';
import Message from './Message';

function SimpleForm () {

	const [
			form,
			setForm
		] = useState({
			'name': '',
			'email': ''
		}),
	 {name, email} = form;

	// No se puede ejecutar hooks de manera condicional
	/*
	 *If(true){
	 *    const [state, setState] = useState([]);
	 *}
	 */

	// No importa que cambie vuelvete a ejecutar
	/*
	 *  UseEffect(() => {
	 *       console.log('hey')
	 *   })
	 */
	// Trabajar por separados las propiedades
	useEffect(
		() => {

			console.log('hey');

			/*
			 * Hay una funcion que se ejecuta cuando se desmonta el componente
			 * El procedimiento parecido a didUnMount
			 */

		},
		[]
	);

	/*
	 * Cuando cambia el estado form se ejecuta el efecto secundario
	 * La primera vez se muestra por que lo cambie
	 */
	useEffect(





		() => {

			        console.log('cambio form');

		},
		[form]
	);

	useEffect(
		() => {

			console.log('cambio email');

		},
		[email]
	);

	/*
	 * Sera necesario tener este handle change aqui
	 * Podria ser mejor con un hooks
	 */
	const handleChangeInput = ({target}) => {

		console.log(target.name);
		console.log(target.value);
		setForm({
			...form,
			[target.name]: target.value
		});

	};

	return (
		<>
			<h1>
    Hola Simple form useEffect
			</h1>

			<div>
				<div className="form-group">
					<input
						autoComplete="off"
						className="form-control"
						name="name"
						onChange={handleChangeInput}
						placeholder="tu nombre"
						type="text"
						value={name}
					/>

				</div>

				<div className="form-group">
					<input
						autoComplete="off"
						className="form-control"
						name="email"
						onChange={handleChangeInput}
						placeholder="email@example.com"
						type="text"
						value={email}
					/>

				</div>

				{name === '123' && <Message />}
			</div>

		</>

	);

}

export default SimpleForm;
