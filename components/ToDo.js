import {useEffect, useReducer} from 'react';
import toDoReducer from '../reducers/toDoReducer';
import useForm from '../hooks/useForm';
import ToDoList from './ToDoList';

const init = () => {

	if (typeof window !== 'undefined') {

		if (localStorage.getItem('todos')) {

			return JSON.parse(localStorage.getItem('todos'));

		}

		return [];

	}

	return [];


	/*
	 *  Return [{
	 *     id: new Date().getTime(),
	 *     description: 'Aprender react',
	 *     done: false
	 *  }]
	 */


};


function ToDo () {

	/*
	 * El init es en caso de que el estado inicial sea procesado (calculado)
	 * Dispatch: disparar las acciones a mi reducer le confirma a react que hubo algun cambio para redibujarlo
	 */

	// La funcion init le va ayudar a react a computar ese estado inicial para que funcione mas rapido el componente


	const [
			todos,
			dispatch
		] = useReducer(
			toDoReducer,
			[],
			init
		),

	 [
			{description},
			handleInputChange,
			reset
		] = useForm({
			'description': ''
		});

	useEffect(
		() => {

			localStorage.setItem(
				'todos',
				JSON.stringify(todos)
			);

		},
		[todos]
	);

	console.log(todos);
	const handleSubmit = (e) => {

			e.preventDefault();

			if (description.trim().length > 1) {

				const newTodo = {
						'id': new Date().getTime(),
						description,
						'done': false
					},
			 action = {
						'type': 'add',
						'payload': newTodo
					};

				dispatch(action);
				reset();

			}

		},

	 handleDelete = (todoId) => {

			const payload = {
					'id': todoId
				},
		 action = {
					'type': 'delete',
					payload
				};

			dispatch(action);

		},

	 handleToggle = (todoId) => {

			dispatch({
				'type': 'toggle',
				'payload': {
					'id': todoId
				}
			});

		};

	return (
		<>
			<div className="col-5">
				<h1>
    				ToDo{todos.length}
				</h1>

				<ToDoList
					handleDelete={handleDelete}
					handleToggle={handleToggle}
					todos={todos}
				/>
			</div>

			<div className="col-2">

				<h4>
   					 Agregar ToDo
				</h4>

				<hr />

				<form onSubmit={handleSubmit}>
					<input
						autoComplete="off"
						name="description"
						onChange={handleInputChange}
						placeholder="Aprender ..."
						type="text"
						value={description}
					/>
					<button type="submit">
  					  Agregar
					</button>

				</form>

			</div>
		</>

	);

}

export default ToDo;
