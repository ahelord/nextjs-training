import Head from "next/head";
import Counter from "../../components/Counter";

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
        </>

    );
};

export default Hooks;
