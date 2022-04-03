import React from "react";
import Footer from "../components/layout/Footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name={"description"} content={"some content"} />
      </Head>
      <div className={"content"}>About</div>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
