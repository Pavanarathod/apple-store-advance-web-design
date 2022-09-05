import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apple Store</title>
      </Head>
      <Header /> <About />
    </>
  );
};

export default Home;
