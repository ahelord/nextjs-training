import ToDoListItem from './ToDoListItem';

function ToDoList ({todos, handleToggle, handleDelete}) {

	return <ul>
		{
			todos.map((todo, index) => (

				<ToDoListItem key={index} todo={todo} index={index} handleToggle={handleToggle} handleDelete={handleDelete}/>

			))

		}

	</ul>;

}


export default ToDoList;
