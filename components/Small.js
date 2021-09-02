import {memo} from 'react';

// Previous
/*
 *Const Small = ({value}) => {
 *  console.log('me volvi a mostrar :(')
 *
 *  return (
 *      <small>
 *          {value}
 *      </small>
 *  );
 *};
 */

// eslint-disable-next-line react/display-name
const Small = memo(({value}) => {

	console.log('me volvi a mostrar :(');

	/*
	 * UseMemo es el que quiero memorizar
	 * solo se dispara si las propiedades cambian
	 */
	return (
		<small>
			{value}
		</small>
	);

});

export default Small;
