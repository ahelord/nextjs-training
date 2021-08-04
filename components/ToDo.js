import {useEffect, useReducer} from "react"
import toDoReducer from "../reducers/toDoReducer"
import useForm from "../hooks/useForm";

const init = () => {

    if(typeof window !== "undefined") {
        if(localStorage.getItem("todos")) {
            return JSON.parse(localStorage.getItem("todos"))
        } else{
            return []
        }
    }else{
        return []
    }

    /*  return [{
        id: new Date().getTime(),
        description: 'Aprender react',
        done: false
    }]*/


}


const ToDo = () => {

    // el init es en caso de que el estado inicial sea procesado (calculado)
    // dispatch: disparar las acciones a mi reducer le confirma a react que hubo algun cambio para redibujarlo

    // la funcion init le va ayudar a react a computar ese estado inicial para que funcione mas rapido el componente




    const [todos, dispatch] = useReducer(toDoReducer, [], init)

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    console.log(todos)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length > 1) {

            const newTodo = {
                id: new Date().getTime(),
                description,
                done: false
            }
            const action = {
                type: 'add',
                payload: newTodo
            }
            dispatch(action);
            reset()
        }
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

                <h4>Agregador ToDo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="description"
                        autoComplete="off"
                        placeholder="Aprender ..."
                        onChange={handleInputChange}
                        value={description}

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
