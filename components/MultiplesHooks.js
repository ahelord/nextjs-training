import useFetch from "../hooks/useFetch";

const MultiplesHooks = () => {
    useFetch("https://www.breakingbadapi.com/api/quotes/1")
    return (
        <>
            <div>
                <h1>Hola multiples hooks</h1>
            </div>

        </>
    );
};

export default MultiplesHooks;
