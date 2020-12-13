import PropTypes from 'prop-types';
/*
Ya no es comun enviar props sino hacer desestructuracion
*/
/*
export default function Hijo(props) {

    console.log(props)
    return (

        <>

            <h1>{JSON.stringify(props.saludo)}</h1>
        </>

        )

}*/
/*Valor por defecto si no se envia nada*/
const Hijo = ({saludo}) =>  {

    console.log(saludo)
    return (

        <>

            <h1>{JSON.stringify(saludo)}</h1>
        </>

    )

}
Hijo.propTypes={
saludo:PropTypes.string.isRequired
}
export default Hijo;