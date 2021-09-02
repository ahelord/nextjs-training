import {useState} from 'react';
import {useCounter} from '../hooks/useState/useCounter';
import Small from './Small';

function Memorize () {

	const {counter, increment} = useCounter(10),
		// Creemos un caso donde no tenga que volver a llamarse
	 [
			show,
			setShow
		] = useState(true);

	/*
	 * Por que show hide vuelve a dispara la renderizacion del
	 * Componente si no hay nada que mostrar o cambiar en la interfaz
	 * Es por que React funciona asi
	 * Si tuvieramos http mal gastariamos red y recursos
	 * Como evitar que se recarge si las propiedades son las mismas
	 * Con useMemo
	 */


	return (
		<div>
			<h1>
    Memorize
			</h1>

			<h1>
            Counter:<Small value={counter} />
			</h1>

			<button onClick={() => increment(1)}>
            +1
			</button>

			<div>
				<button
					className="btn-primary mt-5"
					onClick={() => {

						setShow(!show);

					}}
				>
  Show/Hide
					{' '}

					{JSON.stringify(show)}
				</button>

			</div>

		</div>
	);

}

export default Memorize;
