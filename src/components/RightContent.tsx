import React, { useContext, useState, useEffect } from "react";
import Menu from "./icons/Menu";
import styled from "styled-components";
import { GlobalContext } from "../Context/GlobalProvider";

const StyledRightContent = styled.div`
  transition: var(--transition);
  svg {
    cursor: pointer;
    fill: var(--semi-black);
  }

  .Menu {
    padding: 45px 60px 0;
    position: fixed;
    right: 0;
    top: 0;

    @media (max-width: 748px) {
      padding: 50px 40px 0;
    }

    @media (max-width: 495px) {
      padding: 30px 30px 0;
    }
  }

  .Nav {
    position: fixed;
    top: 0;
    right: 0;
    padding: 15px 0;
    box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    width: 100%;
    z-index: 10;
    svg {
      padding: 0 20px;
      float: right;
    }
  }
`;

interface PropTypes {
  children: React.ReactNode;
}

const RightContent: React.FC<PropTypes> = ({ children }) => {
  const { dispatch, toggleSide } = useContext(GlobalContext);

  const toggleSidebar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    dispatch({ type: "toggleSide", payload: { isToggle: !toggleSide } });
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const mountNavbar = () => {
      const fixed = window.pageYOffset < 9;
      const innerWidth = window.innerWidth < 763;
      if (!fixed && innerWidth) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", mountNavbar);
    return () => window.removeEventListener("scroll", mountNavbar);
  }, [sticky]);

  return (
    <>
      <StyledRightContent onClick={(event) => toggleSidebar(event)}>
        <div className={`${sticky ? "Nav" : "Menu"}`} style={{ opacity: 1 }}>
          <Menu />
        </div>
      </StyledRightContent>
      {children}
    </>
  );
};

export default RightContent;
