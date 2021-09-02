import {useEffect, useRef, useState} from 'react';

const useFetch = (url) => {

	/*
	 *Este isMount mantenga la referencia si el componente sigue montado
	 *cuando cambie los valores no quiero lanzar una redenderizacion nuevamente delete
	 *componente solo mantengo la referencia al valor
	 */

	const isMount = useRef(true),


	 [
			state,
			setState
		] = useState({'data': null,
			'loading': true,
			'error': null});

	/*
	 *Cuando estamos cargando la informacion ya no quiero hacer nada en esta pagina y luego llamamos al setState
	 * y nuestra aplicacion hace crash
	 */


	/* Esto se hace cuando el componente se carga por primera vez*/
	useEffect(
		() => () => {

			isMount.current = false;

		},
		[]
	);

	useEffect(
		async () => {

			setState({
				'loading': true,
				'error': null,
				'data': null
			});
			const request = await fetch(url),
		 data = await request.json();

			/*
			 *SetState({
			 *        loading: false,
			 *        error: null,
			 *        data,
			 *    })
			 */

			setTimeout(
				() => {

					if (isMount.current) {

						setState({
							'loading': false,
							'error': null,
							data
						});

					} else {

						console.log('setState no se llamo');

					}

				},
				4000
			);

		},
		[url]
	);


	return state;

};

export default useFetch;
