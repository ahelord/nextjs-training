import {useCounter} from "../hooks/useCounter";

const CounterWithHook = () => {

    // se utilizaria un custom hook para reutilizar el uso de un contador
    // evitar usar useState
    // centralizar la logica en una forma abstracta
    const initValue = 100;
    const {state, increment, decrement,reset} = useCounter(initValue)
    return (
        <div>
            <h1>Counter with hook {state}</h1>
            <button onClick={()=>increment(2)} className="btn btn-primary">+1</button>
            <button onClick={()=>decrement(2)} className="btn btn-secondary">-1</button>
            <button onClick={reset} className="btn btn-info">Reset</button>
        </div>
    );
};

export default CounterWithHook;
