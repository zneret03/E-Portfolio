import React from "react";
import { Layout, LandingPage, About, Module } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <LandingPage />
      <About />
      <Module />
    </Layout>
  );
};

export default Home;
