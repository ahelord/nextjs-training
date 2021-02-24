import '../styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                  crossOrigin="anonymous"/>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
