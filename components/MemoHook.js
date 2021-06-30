import {useState,useMemo} from 'react';
import {useCounter} from "../hooks/useState/useCounter";
import {procesoPesado} from "../helpers/procesoPesado";

const MemoHook = () => {
    const {counter, increment} = useCounter(5000)
    // creemos un caso donde no tenga que volver a llamarse
    const [show, setShow] = useState(true);
    // por que show hide vuelve a dispara la renderizacion del
    // componente si no hay nada que mostrar o cambiar en la interfaz
    // es por que React funciona asi
    // si tuvieramos http mal gastariamos red y recursos
    // como evitar que se recarge si las propiedades son las mismas
    // con useMemo


    // el function es como el callback y el input son como las depencias si algo
    // cambia quiero memorizar el nuevo resultadfo
    // si el counter cambia necesito una funcion memorizada de es funcion

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memorize</h1>
            <h3>Counter: <small>{counter}</small>
            </h3>

            <p>{memoProcesoPesado}</p>
            <button onClick={() => increment(1)}>
                +1
            </button>

            <div>

                {/* Si toco el boton se vuelven a disparar no deberian
                 lanzar esas peticiones porque no tiene nada que ver con el monto
                 procesado memoriza este valor si lo argumento son iguales pero
                 si cambia si hay que reprocesar
                 */}
                <button onClick={() => {
                    setShow(!show)
                }} className="btn-primary mt-5">
                    Show/Hide {JSON.stringify(show)}
                </button>

            </div>

        </div>
    );
};

export default MemoHook;
