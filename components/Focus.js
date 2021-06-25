import {useRef} from 'react'

export const Focus = () => {

    /*El useRef sirve para mantener una referencia de un objeto mutable*/
    /* Uno puede cambiar a lo apunta este ref sin llamar una rederizacion adicional*/
    const inputRef = useRef();
    console.log('ref', inputRef)

    const handleClick = () => {
        /*Yo podria hacerlo de la forma tradicional selecionando por querySelector y haciendo focus*/
        //document.querySelector('input').focus();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus</h1>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button className="btn btn-outline-primary mt-5"
                    onClick={handleClick}
            >Focus
            </button>
        </div>
    );
};

