import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 25px 0;
  max-width: 250px;
  margin: 0 auto;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--white);

    &:hover,
    &:focus {
      color: var(--semi-black);
    }
  }

  @media (max-width: 1080px) {
    padding-top: 100px;
  }

  @media (max-width: 780px) {
    padding-top: 80px;
  }
`;

const HCIFooter: React.FC = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/zneret03/E-Portfolio">
        <span>Created By Ian A. Drilon BSCS 3B</span>
      </a>
    </StyledFooter>
  );
};

export default HCIFooter;
