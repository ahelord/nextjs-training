import useFetch from '../hooks/useFetch';
import {useCounter} from '../hooks/useState/useCounter';
import {useLayoutEffect, useRef} from 'react';

function Layout () {

	/*
	 * El proposito de layout effect es despues de que se rederize algo puedo
	 * obtener mediciones o los tamaños o ejecutar codigo despues de que ya
	 * se rendiza
	 * Un caso de uso puede ser una caja de texto que segun un texto puede variar su
	 * tamaño despues de renderizado
	 */
	const {counter, increment, decrement} = useCounter(1),
	 {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`),
	 {quote} = Boolean(data) && data[0],

	 paragraphQuoteRef = useRef();

	useLayoutEffect(
		() => {

			console.log(paragraphQuoteRef.current.getBoundingClientRect());


		},
		[quote]
	);

	return (
		<>
			<div>
				<h1>
    Layout Effect Hook
				</h1>

				<hr />
			</div>

			<blockquote>
				<p
					className="mb-0"
					ref={paragraphQuoteRef}
				>{quote}
				</p>

				<br />
			</blockquote>


			<button
				className="btn-primary"
				onClick={() => increment()}
			>
  Siguiente nota
			</button>
		</>
	);

}

export default Layout;
