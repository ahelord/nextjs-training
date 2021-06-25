import '../styles/Counter.module.css'
import {useState} from 'react';

const Counter = () => {
    const [state, setState] = useState({
        counterFirst: 10,
        counterSecond: 20
    });
    const {counterFirst, counterSecond} = state;
    console.log(counterFirst, counterSecond)
    return (
        <div>
            <h1>Hola hooks</h1>
            Counter Fisrt {counterFirst}
            <br/>
            Counter Second {counterSecond}
            <div>
                <button className="btn btn-primary" onClick={() => {
                    setState({

                        /*  counterFirst: counterFirst+1,
                        counterSecond: counterSecond*/
                        /* Se puede asi pero tendria que revisar todas las atributos*/
                        ...state,
                        counterFirst: counterFirst + 1
                    })
                }}>
                    +1
                </button>
            </div>

            <hr/>
        </div>
    );
};

export default Counter;
