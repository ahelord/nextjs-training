import {useMemo, useState} from 'react';
import {useCounter} from '../hooks/useState/useCounter';
import {procesoPesado} from '../helpers/procesoPesado';

function MemoHook () {

	const {counter, increment} = useCounter(5000),
		// Creemos un caso donde no tenga que volver a llamarse
	 [
			show,
			setShow
		] = useState(true),

		/*
		 * Por que show hide vuelve a dispara la renderizacion del
		 * Componente si no hay nada que mostrar o cambiar en la interfaz
		 * Es por que React funciona asi
		 * Si tuvieramos http mal gastariamos red y recursos
		 * Como evitar que se recarge si las propiedades son las mismas
		 * Con useMemo
		 */


		/*
		 * El function es como el callback y el input son como las depencias si algo
		 * Cambia quiero memorizar el nuevo resultadfo
		 * Si el counter cambia necesito una funcion memorizada de es funcion
		 */

	 memoProcesoPesado = useMemo(
			() => procesoPesado(counter),
			[counter]
		);

	return (
		<div>
			<h1>
    Memorize
			</h1>

			<h3>
            Counter:<small>
					{counter}
				</small>
			</h3>

			<p>
				{memoProcesoPesado}
			</p>

			<button onClick={() => increment(1)}>
            +1
			</button>

			<div>

				{/* Si toco el boton se vuelven a disparar no deberian
                 lanzar esas peticiones porque no tiene nada que ver con el monto
                 procesado memoriza este valor si lo argumento son iguales pero
                 si cambia si hay que reprocesar
                 */}

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

export default MemoHook;
