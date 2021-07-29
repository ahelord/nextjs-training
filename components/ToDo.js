import { useReducer } from "react"
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
    return (
        <div>
            ToDo
            <ul>
                <li></li>
                <li></li>
                <li></li>

            </ul>
        </div>
    )
}

export default ToDo
