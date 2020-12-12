import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.section`
  color: var(--white);
  transition: var(--transition);

  .content {
    display: block;
    padding: 125px 0 0;

    h1 {
      line-height: 100px;
      max-width: 400px;
      text-transform: uppercase;
      font-size: 80px;

      @media (max-width: 748px) {
        font-size: 70px;
        line-height: 90px;
      }

      @media (max-width: 495px) {
        font-size: 50px;
        line-height: 65px;
      }
    }

    h4 {
      color: var(--white);
      font-weight: lighter;
    }

    span {
      font-size: var(--fz-lg);

      @media (max-width: 495px) {
        font-size: var(--fz-sm);
        line-height: 25px;
      }
    }
  }
`;

const LandingPage: React.FC = () => {
  return (
    <div className="background">
      <StyledLandingPage>
        <div className="content">
          <h4>Subject</h4>
          <h1>human computer interaction</h1>
          <span>a bridge of solutions for a complex connections </span>
        </div>
      </StyledLandingPage>
    </div>
  );
};

export default LandingPage;
