import {useState} from 'react';
import MultiplesHooks from './MultiplesHooks';

function Reference () {

	const [
		show,
		setShow
	] = useState(false);

	return (
		<div>
			<h1>
    			Reference
			</h1>

			{show && <MultiplesHooks />}

			<div>
				<button
					className="btn-primary mt-5"
					onClick={() => {

						setShow(!show);

					}}
				>
  					Show/Hide
				</button>

			</div>
		</div>
	);

}

export default Reference;
