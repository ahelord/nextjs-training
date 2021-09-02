import {useCallback, useEffect, useState} from 'react';
import ShowIncrement from './ShowIncrement';

function CallBackHook () {

	const [
			counter,
			setCounter
		] = useState(10),

		/*
		 *    Const increment = () => {
		 *     setCounter(counter + 1);
		 *    }
		 */

		/*
		 *    Tiene dos casos de uso:
		 *    funcion a componente hijo
		 */

		/*
		 *    En los parentesis va la logica a implementar
		 *    va regresar una version memorizada de esa funcion
		 *    que me sirve para enviar como argumentos a otras funciones
		 */

		/* Si dejo solo setCounter solo hace una vez*/

		/*
		 *  Const increment =  useCallback(
		 *     () => {
		 *         setCounter(counter+1)
		 *     },
		 *     [setCounter],
		 *  );
		 */

		/* Tampoco se puede por que la dependencia esta cambiando siempre*/
		/*
		 *Const increment =  useCallback(
		 *    () => {
		 *        setCounter(counter+1)
		 *    },
		 *    [setCounter,counter],
		 *);
		 */

	 increment = useCallback(
			(factor) => {

				setCounter((counter) => counter + factor);

			},
			[setCounter]
		);

	/*
	 *Otra forma de utilizar useCallback es cuando se tiene
	 * un useEffect tiene una dependencia y es la funcion es recomendado
	 * utilizar useCallback si no esta useCallback el efecto se dispararia
	 */
	useEffect(
		() => () => {

		},
		[increment]
	);

	return (
		<>
			<div>
				<h1>
    Use Callback hook:{counter}
				</h1>
			</div>

			<ShowIncrement increment={increment} />
		</>

	);

}

export default CallBackHook;
