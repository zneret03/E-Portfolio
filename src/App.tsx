import React from "react";
import Home from "./page/Home";
import Archive from "./page/Archive";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalProvider } from "./Context/GlobalProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Bubble } from "./components";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Bubble />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Archive" component={Archive} />
      </Router>
    </GlobalProvider>
  );
};

export default App;
