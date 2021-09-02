import React from 'react';

function ToDoListItem ({todo, index, handleToggle, handleDelete}) {

	return <li key={todo.id}>
		<p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>
			{index + 1}. {todo.description}
		</p>

		<button onClick={() => handleDelete(todo.id)}>
            Borrar
		</button>

	</li>;

}

export default ToDoListItem;
