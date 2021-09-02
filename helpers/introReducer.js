const initialState = [
		{
			'id': 2,
			'todo': 'comprar pan',
			'done': false
		}
	],

	introReducer = (state = initialState, action) => {

		if (action?.type === 'add') {

			return [
				...state,
				action.payload
			];

		}

		return state;

	};

let todos = introReducer();

const newToDo = {
		'id': 3,
		'todo': 'compar leche',
		'done': false
	},

	newToDoAction = {
		'type': 'add',
		'payload': newToDo
	};

todos = introReducer(
	todos,
	newToDoAction
);

console.log(todos);
