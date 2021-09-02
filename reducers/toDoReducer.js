const toDoReducer = (state = [], action) => {

	switch (action.type) {

	case 'add':
		return [
			...state,
			action.payload
		];
	case 'delete':
		return state.filter((todo) => todo.id != action.payload.id);
	case 'toggle-old':
		return state.map((toDo) => {

			if (toDo.id === action.payload.id) {

				return {
					...toDo,
					'done': !toDo.done
				};

			}

			return toDo;

		});
	case 'toggle':
		return state.map((todo) => (todo.id === action.payload.id ? { ...todo,
			done: !todo.done }
			: todo));
	default:
		return state;

	}

};

export default toDoReducer;
