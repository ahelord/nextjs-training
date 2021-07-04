import React from 'react';
import CallBackHook from "./CallBackHook";

/*
No se podria resolver por React.memo
Cuando se rendiriza CallBackHook vuelve
generar la funcion increment cuando yo la vuelvo
insertar hay y apunta a lugar de memoria diferente
y por esa razon se vuelve a generar, entonces aqui se
utilzia el useCallback
*/

const ShowIncrement = React.memo(({increment}) => {
    console.log('me volvi a generar show increment')
    return (
        <button onClick={()=>{
            {/*si colocamos un 5 aca se debe colocar en el callback para recibirlo del padre*/}
            increment(5)
        }} className="btn btn-primary">
            Incrementar
        </button>
    );
});

export default ShowIncrement;
