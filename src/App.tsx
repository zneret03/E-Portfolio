import React from "react";
import { GlobalProvider } from "./Context/GlobalProvider";
import { Layout, LandingPage, About, HCIFooter } from "./components";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Layout>
        <LandingPage />
        <About />
        <HCIFooter />
      </Layout>
    </GlobalProvider>
  );
};

export default App;
