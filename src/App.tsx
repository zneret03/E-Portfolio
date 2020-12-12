import React from "react";
import { GlobalProvider } from "./Context/GlobalProvider";
import { Layout, LandingPage, About, Module, HCIFooter } from "./components";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Layout>
        <LandingPage />
        <About />
        <Module />
        <HCIFooter />
      </Layout>
    </GlobalProvider>
  );
};

export default App;
