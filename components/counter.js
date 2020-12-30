/* Con el comando rafce se crea un componente funcional*/
import PropTypes from 'prop-types';
import { useState } from 'react'
const Counter = ({ value = 10 }) => {

    /*     Los hooks son funciones,
        useState se definen dos parametros
        el nombre del atributo y la funcion set
        se igual a useState con el valir del atributo */

    /*     const [nombre, setNombre] = useState('Goku');
        console.log(nombre,setNombre) */

    const [counter, setCounter] = useState(value);
    console.log("counter", counter)


    const handleClickButton = (event) => {
        console.log(event)

        /*         counter++;
         */
        /* el anterior no funciona toca hacerlo con set */

        setCounter(counter + 1)
        /* Si no tiene acceso al counter */
        /* setCounter((c)=>c+1) */
    }

    const handleResetButton = () => setCounter(value)


    const handleSubtractButton = () => setCounter(counter - 1)

    return (<>
        <h1>CounterApp</h1>
        <h2> {counter} </h2>
        {/*         <button onClick={function(){console.log('+1')}}>+1</button>*/}
        {/*  <button onClick={function(e){console.log(e)}}>+1</button> */}
        <button onClick={handleClickButton}>+1</button>
        <button onClick={handleResetButton}>Reset </button>
        <button onClick={handleSubtractButton}>-1 </button>


    </>)
}

Counter.propTypes = {
    value: PropTypes.number
}

export default Counter;

