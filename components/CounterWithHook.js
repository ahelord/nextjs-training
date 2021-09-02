import {useCounter} from '../hooks/useState/useCounter';

function CounterWithHook () {

	/*
	 * Se utilizaria un custom hook para reutilizar el uso de un contador
	 * Evitar usar useState
	 * Centralizar la logica en una forma abstracta
	 */
	const initValue = 100,
	 {state, increment, decrement, reset} = useCounter(initValue);

	return (
		<div>
			<h1>
    Counter with hook{state}
			</h1>

			<button
				className="btn btn-primary"
				onClick={() => increment(2)}
			>
    +1
			</button>

			<button
				className="btn btn-secondary"
				onClick={() => decrement(2)}
			>
    -1
			</button>

			<button
				className="btn btn-info"
				onClick={reset}
			>
    Reset
			</button>

			<hr />
		</div>
	);

}

export default CounterWithHook;
