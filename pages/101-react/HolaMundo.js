import {Fragment} from 'react';

export default function HolaMundo () {

	/* Const saludo = false*/
	/* No imprime constantes*/

	/* Const saludo = [1,2,3,4,5]*/
	/* No imprime arreglos sino que los concatena*/

	/*
	 *    Const salud  ={
	 *     nombre:'fernando',
	 *     apellido:'velez'
	 *    }
	 */
	/* No se pueden imprimir objetos*/
	const saludo = {
		'nombre': 'fernando',
		'apellido': 'velez'
	};

	return (

	/*
	 *        <div>
	 *         <h1>Hola mis amigos, como vais</h1>
	 *         <p>Cordial saludo</p>
	 *        </div>
	 */

	/* En un componente funcional debo responde una cosa, inceseariamente coloco div para agrupar todo*/


	/* Puedo utilizar fragment pero??? debo escribir mucho*/
	/*
	 *   <Fragment>
	 *         <h1>Hola mis amigos, como vais</h1>
	 *         <p>Cordial saludo</p>
	 *     </Fragment>
	 *
	 */
	/* Es mucho codigo tener que utilizar fragment a cada momento hay una forma corta*/

		<>

			<h1>
				{JSON.stringify(saludo)}
			</h1>

			<p>
            Cordial saludo
			</p>
		</>

	);

}
