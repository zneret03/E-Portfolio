import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import { Bubble, Sidebar, RightContent } from "./";
import { useSpring } from "react-spring";
import GlobalStyles from "../styles/GlobalStyles";

if (typeof window != "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

interface PropTypes {
  children: React.ReactNode;
}

const App: React.FC<PropTypes> = ({ children }) => {
  const { toggleSide } = useContext(GlobalContext);

  const animatedSidebar = useSpring({
    transform: toggleSide ? "translateX(0%)" : "translateX(100%)",
    marginLeft: toggleSide ? "0px" : "-400px",
  });

  return (
    <>
      <GlobalStyles />
      <Bubble />
      <Sidebar animatedSidebar={animatedSidebar} />
      <RightContent>{children}</RightContent>
    </>
  );
};

export default App;
