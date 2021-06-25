import {useState} from 'react';
import MultiplesHooks from "./MultiplesHooks";

const Reference = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Reference</h1>
            {show && <MultiplesHooks/>}
            <div>
                <button onClick={()=>{
                    setShow(!show)
                }} className="btn-primary mt-5">
                    Show/Hide
                </button>

            </div>
        </div>
    );
};

export default Reference;
