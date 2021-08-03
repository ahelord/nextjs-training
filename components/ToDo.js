import {useReducer} from "react"
import toDoReducer from "../reducers/toDoReducer"

const initialState = [{
    id: new Date().getTime(),
    description: 'Aprender react',
    done: false
}]
const ToDo = () => {

    // el init es en caso de que el estado inicial sea procesado (calculado)
    // dispatch: disparar las acciones a mi reducer le confirma a react que hubo algun cambio para redibujarlo

    const [todos, dispatch] = useReducer(toDoReducer, initialState)
    console.log(todos)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            description: 'Aprender hook',
            done: false
        }
        const action = {
            type: 'add',
            payload:newTodo
        }
        dispatch(action);
    }
    return (
        <>
            <div className="col-5">
                <h1>ToDo {todos.length}</h1>
                <ul>
                    {
                        todos.map((todo, index) => (

                            <li key={todo.id}>{index + 1}. {todo.description}
                                <button>
                                    Borrar
                                </button>

                            </li>

                        ))
                    }

                </ul>
            </div>
            <div className="col-2">

                <h4>Agregador ToDO</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="description"
                    autoComplete="off"
                    placeholder="Aprender ..."

                    />
                    <button type="submit">
                        Agregar
                    </button>

                </form>

            </div>
        </>

    )
}

export default ToDo
