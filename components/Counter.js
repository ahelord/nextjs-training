import '../styles/Counter.module.css';
import {useState} from 'react';

function Counter () {

	const [
			state,
			setState
		] = useState({
			'counterFirst': 10,
			'counterSecond': 20
		}),
	 {counterFirst, counterSecond} = state;

	console.log(
		counterFirst,
		counterSecond
	);

	return (
		<div>
			<h1>
    Hola hooks
			</h1>
    Counter Fisrt {counterFirst}

			<br />
    Counter Second {counterSecond}

			<div>
				<button
					className="btn btn-primary"
					onClick={() => {

						setState({

							/*
							 *  CounterFirst: counterFirst+1,
							 *                counterSecond: counterSecond
							 */
							/* Se puede asi pero tendria que revisar todas las atributos*/
							...state,
							'counterFirst': counterFirst + 1
						});

					}}
				>
  +1
				</button>
			</div>

			<hr />
		</div>
	);

}

export default Counter;
