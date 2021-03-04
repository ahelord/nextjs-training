import Head from "next/head";
import Counter from "../../components/Counter";
import CounterWithHook from "../../components/CounterWithHook";
import SimpleForm from "../../hooks/useEffect/SimpleForm";

const Hooks = () => {
    return (
        <>
            <Head>
                <title>Hooks</title>
            </Head>
            <div>
                <h1>Hola hooks</h1>
                <Counter/>
            </div>

            <div>
                <h1>Hola counter hook custom </h1>
                <CounterWithHook/>
            </div>

            <div>
                <h1>Hola Simple form useEffect</h1>
                <SimpleForm/>
            </div>

        </>

    );
};

export default Hooks;
