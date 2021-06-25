import Head from "next/head";
import Counter from "../../components/Counter";
import CounterWithHook from "../../components/CounterWithHook";
import SimpleForm from "../../components/SimpleForm";
import FormWithCustomHook from "../../components/FormWithHook";
import MultiplesHooks from "../../components/MultiplesHooks";
import {Focus} from "../../components/Focus";
import Reference from "../../components/Reference";

const Hooks = () => {
    return (
        <>
            <Head>
                <title>Hooks</title>
            </Head>
            <div className="border border-primary">

                <Counter/>
            </div>

            <div className="border border-primary">

                <CounterWithHook/>
            </div>

            <div className="border border-primary">

                <SimpleForm/>
            </div>

            <div className="border border-primary">
                <FormWithCustomHook/>
            </div>

 {/*           <div className="border border-primary">
                <MultiplesHooks/>
            </div>*/}

            <div className="border border-primary">
                <Focus/>
            </div>

            <div className="border border-primary">
                <Reference/>
            </div>

        </>

    );
};

export default Hooks;
