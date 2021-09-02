import useFetch from '../hooks/useFetch';
import {useCounter} from '../hooks/useState/useCounter';

function MultiplesHooks () {

	const {counter, increment, decrement} = useCounter(1),
	 {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`),
	 {author, quote} = Boolean(data) && data[0];

	return (
		<>
			<div>
				<h1>
    Breaking bads notas
				</h1>

				<hr />
			</div>

			{
				loading
					? <>
						<div
							className="spinner-grow text-secondary"
							role="status"
						/><br />
					</>

					: <blockquote>
						<p className="mb-0">
							{quote}
						</p>

						<br />

						<footer className="blockquote-footer">
							{author}
						</footer>
					</blockquote>
			}


			{counter > 1 &&
    <button
    	className="btn-primary"
    	onClick={() => decrement()}
    >
        Nota anterior
    </button>}

			<button
				className="btn-primary"
				onClick={() => increment()}
			>
  Siguiente nota
			</button>


		</>
	);

}

export default MultiplesHooks;
