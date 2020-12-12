import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 25px 0;
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
  color: var(--white);

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
      <span>Created By Ian A. Drilon BSCS 3B</span>
    </StyledFooter>
  );
};

export default HCIFooter;
