import PropTypes from 'prop-types';

/*
 *Ya no es comun enviar props sino hacer desestructuracion
 */
/*
 *Export default function Hijo(props) {
 *
 *    console.log(props)
 *    return (
 *
 *        <>
 *
 *            <h1>{JSON.stringify(props.saludo)}</h1>
 *        </>
 *
 *        )
 *
 *}
 */
/* Valor por defecto si no se envia nada*/
function Hijo ({saludo, subtitulo}) {

	console.log(saludo);

	return (

		<>

			{/* <h1>{JSON.stringify(saludo)}</h1> */}

			<h1>
				{saludo}
			</h1>

			<p>
				{subtitulo}
			</p>
		</>

	);

}
Hijo.propTypes = {
	'saludo': PropTypes.string.isRequired
};
Hijo.defaultProps = {
	'subtitulo': 'soy un subtitulo'
};
export default Hijo;
