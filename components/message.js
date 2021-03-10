import {useEffect, useState} from 'react'

const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords;
    useEffect(() => {
        console.log('componente montado')
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y}
            setCoords(coords)
            console.log(coords)
        }
        // se coloca la siguiente funcion en una independiente
        /*        window.addEventListener('mousemove', (e) => {
                    //console.log(e)
                    // el listener de la pantalla se queda pegado en el componente y no se quita al desmontar el componente
                    const coords = {x: e.x, y: e.y}
                    console.log(coords)
                    // Se debe hacer un proceso de limpieza cuando el componente ya no se usa
                })*/

        window.addEventListener('mousemove', mouseMove);

        return () => {
            // esta es la fase de limpieza
            // se puede hacer procedimiento para por ejemplo cancelar suscripciones
            console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)

        };
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} , y:{y}
            </p>
        </div>
    );
};

export default Message;
