import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import MastHead from "../components/masthead";
import Skills from "../components/skills";
import TrustedBy from "../components/trustedby";
import Works from "../components/works";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apple Store</title>
      </Head>
      <MastHead />
      <About />
      <Skills />
      {/* <Works /> */}
      <TrustedBy />
    </>
  );
};

export default Home;
