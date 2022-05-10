import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import MastHead from "../components/masthead";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apple Store</title>
      </Head>
      <MastHead />
      <About />
    </>
  );
};

export default Home;
