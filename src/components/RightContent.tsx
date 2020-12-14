import React, { useContext, useState, useEffect } from "react";
import { Menu, Moon, Sun } from "./icons";
import { Switch } from "antd";
import styled from "styled-components";
import { GlobalContext } from "../Context/GlobalProvider";

const StyledRightContent = styled.div`
  transition: var(--transition);
  display: flex;
  align-items: center;
  padding: 45px 60px 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  svg {
    cursor: pointer;
    fill: var(--white);
  }

  span {
    z-index: 20;
    margin-right: 20px;
    display: block;

    @media (max-width: 748px) {
      display: none;
    }
  }

  .Menu {
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
  const { dispatch1, toggleSide, DarkState, dispatch2 } = useContext(
    GlobalContext
  );

  const toggleSidebar = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    dispatch1({ type: "toggleSide", payload: { isToggle: !toggleSide } });
  };

  const changeDarkTheme = () => {
    dispatch2({ type: "isDark", payload: { isDark: !DarkState } });
  };

  console.log(DarkState);

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
      <StyledRightContent>
        <span>
          <Switch
            style={{ zIndex: 10 }}
            onClick={changeDarkTheme}
            checkedChildren={<Moon />}
            unCheckedChildren={<Sun />}
          />
        </span>
        <div
          onClick={(event) => toggleSidebar(event)}
          className={`${sticky ? "Nav" : "Menu"}`}
          style={{ opacity: 1 }}
        >
          <Menu />
        </div>
      </StyledRightContent>
      {children}
    </>
  );
};

export default RightContent;
