import {Fragment} from "react";

export default function HolaMundo() {
    /*const saludo = false*/
    /*no imprime constantes*/

    /*const saludo = [1,2,3,4,5]*/
    /* no imprime arreglos sino que los concatena*/

    /*    const salud  ={
        nombre:'fernando',
        apellido:'velez'
    }*/
    /*no se pueden imprimir objetos*/
    const saludo ={
        nombre:'fernando',
        apellido:'velez'
    }
    return (

/*        <div>
            <h1>Hola mis amigos, como vais</h1>
            <p>Cordial saludo</p>
        </div>*/

        /*en un componente funcional debo responde una cosa, inceseariamente coloco div para agrupar todo*/


      /* puedo utilizar fragment pero??? debo escribir mucho*/
     /*   <Fragment>
            <h1>Hola mis amigos, como vais</h1>
            <p>Cordial saludo</p>
        </Fragment>

*/
    /*es mucho codigo tener que utilizar fragment a cada momento hay una forma corta*/

        <>

            <h1>{JSON.stringify(saludo)}</h1>
            <p>Cordial saludo</p>
        </>

        )

}