import React from "react";
import Home from "./page/Home";
import Archive from "./page/Archive";
import GlobalStyles from "./styles/GlobalStyles";
import { GlobalProvider } from "./Context/GlobalProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Bubble } from "./components";
import ScrollToTop from "./components/utils/ScrollToTop";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Bubble />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Archive" component={Archive} />
          </Switch>
        </ScrollToTop>
      </Router>
    </GlobalProvider>
  );
};

export default App;
