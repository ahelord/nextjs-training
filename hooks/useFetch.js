import {useEffect, useState, useRef} from 'react'

const useFetch = (url) => {

    /*este isMount mantenga la referencia si el componente sigue montado
cuando cambie los valores no quiero lanzar una redenderizacion nuevamente delete
componente solo mantengo la referencia al valor*/

    const isMount = useRef(true);


    const [state, setState] = useState({data: null, loading: true, error: null});

    /*Cuando estamos cargando la informacion ya no quiero hacer nada en esta pagina y luego llamamos al setState
    y nuestra aplicacion hace crash*/


    /*esto se hace cuando el componente se carga por primera vez*/
    useEffect(() => {
        return () => {
            isMount.current = false;
        };
    }, []);

    useEffect(async () => {
        setState({
            loading: true,
            error: null,
            data: null
        })
        const request = await fetch(url);
        const data = await request.json();
        /*setState({
            loading: false,
            error: null,
            data,
        })*/

        setTimeout(() => {
            if (isMount.current) {
                setState({
                    loading: false,
                    error: null,
                    data,
                })
            }else{
                console.log('setState no se llamo')
            }

        }, 4000)
    }, [url]);


    return state;
};

export default useFetch;
