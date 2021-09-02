// UseEffect nos permite ejecutar un efecto secundario cuando algo suceda en nuestro componente
import {useEffect, useState} from 'react';
import Message from './Message';
import useForm from '../hooks/useForm';

function FormWithCustomHook () {

	// El poder que tienen los custom hooks para centralizar logica
	const [
			formValues,
			handleInputChange
		] = useForm({
			'name': '',
			'email': '',
			'password': ''
		}),
	 {name, email, password} = formValues;

	useEffect(
		() => {

			console.log('cambio email');

		}
		, [email]
	);

	// Se puede utilizar un custom hook para no estar creando esto por cada formulario que implemente
	/*
	 *Const handleNameChange = ({target}) => {
	 *    console.log(target.name)
	 *    console.log(target.value)
	 *    setForm({
	 *        ...form,
	 *        [target.name]: target.value
	 *    })
	 *}
	 */
	const handleSubmit = (e) => {

		e.preventDefault();
		console.log(formValues);

	};

	return (
		<>
			<h1>
    Form with custom hook
			</h1>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						autoComplete="off"
						className="form-control"
						name="name"
						onChange={handleInputChange}
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
						onChange={handleInputChange}
						placeholder="email@example.com"
						type="text"
						value={email}
					/>

				</div>

				<div className="form-group">
					<input
						autoComplete="off"
						className="form-control"
						name="password"
						onChange={handleInputChange}
						placeholder="tu password"
						type="password"
						value={password}
					/>

				</div>

				<button
					className="btn-primary"
					type="submit"
				>
    Guardar
				</button>
			</form>

		</>

	);

}

export default FormWithCustomHook;
