import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import { Sidebar, RightContent, HCIFooter } from "./";
import { useSpring } from "react-spring";

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
      <Sidebar animatedSidebar={animatedSidebar} />
      <RightContent>{children}</RightContent>
      <HCIFooter />
    </>
  );
};

export default App;
