import {useEffect, useState} from 'react'

const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true, error: null});
    useEffect(async () => {
        setState({
            loading: true,
            error: null,
            data:null
        })
        const request = await fetch(url);
        const data = await request.json();
        setState({
            loading: false,
            error: null,
            data,
        })
    }, [url]);
    return state;
};

export default useFetch;
