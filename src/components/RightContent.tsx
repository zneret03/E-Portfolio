import React, { useContext } from "react";
import Menu from "./icons/Menu";
import styled from "styled-components";
import { GlobalContext } from "../Context/GlobalProvider";

const StyledRightContent = styled.div`
  padding: 50px 60px 0;
  position: fixed;
  right: 0;

  @media (max-width: 748px) {
    padding: 50px 40px 0;
  }

  @media (max-width: 495px) {
    padding: 50px 30px 0;
  }

  svg {
    cursor: pointer;
    fill: var(--semi-black);
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

  return (
    <>
      <StyledRightContent onClick={(event) => toggleSidebar(event)}>
        <Menu />
      </StyledRightContent>
      {children}
    </>
  );
};

export default RightContent;
