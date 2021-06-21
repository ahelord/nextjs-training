import useFetch from "../hooks/useFetch";
import {useCounter} from "../hooks/useState/useCounter";

const MultiplesHooks = () => {
    const {counter,increment,decrement} = useCounter(1)
    const {loading,data} = useFetch("https://www.breakingbadapi.com/api/quotes/"+counter)
    const {author,quote} = !!data && data[0];
    return (
        <>
            <div>
                <h1>Breaking bads notas</h1>
                <hr/>
            </div>

            {
                loading ?
                    <>
                        <div className="spinner-grow text-secondary" role="status">
                        </div><br/>
                    </> :

                    <blockquote>
                        <p className="mb-0">{quote}</p>
                        <br></br>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
            }


            {counter > 1 &&
            <button onClick={()=>decrement()} className="btn-primary">
                Nota anterior
            </button>
            }

            <button onClick={()=>increment()} className="btn-primary">
                Siguiente nota
            </button>


        </>
    );
};

export default MultiplesHooks;
