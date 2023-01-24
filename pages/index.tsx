import Hero from "@/components/Hero";
import Head from "next/head";

function Home() {
    return (
        <>
            <Head>
                <title>Hello There</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </>
    );
}

export default Home;
