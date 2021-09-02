import React, {useCallback, useState} from 'react';
import {Hijo} from './Hijo';

export function Padre () {

	const numeros = [
			2,
			4,
			6,
			8,
			10
		],
	 [
			valor,
			setValor
		] = useState(0),

	 incrementar = useCallback(
			(num) => {

				setValor((value) => value + num);

			},
			[setValor]
		);


	return (
		<div>
			<h1>
    Padre
			</h1>

			<p>
				{' '}
            Total:{ valor }
			</p>

			<hr />

			{
				numeros.map((n) => (<Hijo
					incrementar={incrementar}
					key={n}
					numero={n}
				/>))
			}

			{/* <Hijo /> */}
		</div>
	);

}
