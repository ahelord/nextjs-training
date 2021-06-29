import {useState} from 'react';
import {useCounter} from "../hooks/useState/useCounter";
import Small from "./Small";

const Memorize = () => {
    const {counter, increment} = useCounter(10)
    // creemos un caso donde no tenga que volver a llamarse
    const [show, setShow] = useState(true);
    // por que show hide vuelve a dispara la renderizacion del
    // componente si no hay nada que mostrar o cambiar en la interfaz
    // es por que React funciona asi
    // si tuvieramos http mal gastariamos red y recursos
    // como evitar que se recarge si las propiedades son las mismas
    // con useMemo


    return (
        <div>
            <h1>Memorize</h1>
            <h1>Counter: <Small value={counter}/>
            </h1>
            <button onClick={() => increment(1)}>
                +1
            </button>

            <div>
                <button onClick={() => {
                    setShow(!show)
                }} className="btn-primary mt-5">
                    Show/Hide {JSON.stringify(show)}
                </button>

            </div>

        </div>
    );
};

export default Memorize;
