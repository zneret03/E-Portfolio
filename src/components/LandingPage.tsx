import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledLandingPage = styled.section`
  color: var(--white);
  transition: var(--transition);
  min-height: 100vh;

  .content {
    display: block;
    padding: 125px 0;

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
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const one = <h4>Subject</h4>;

  const two = <h1>human</h1>;

  const three = <h1>computer</h1>;

  const four = <h1>interaction</h1>;

  const five = <span>a bridge of solutions for a complex connections </span>;

  const list = [one, two, three, four, five];

  return (
    <StyledLandingPage id="home">
      <TransitionGroup component={null}>
        <div className="content">
          {isMounted &&
            list.map((list: any, index: number) => (
              <CSSTransition
                key={index}
                in={true}
                classNames="fadeup"
                timeout={2000}
              >
                <div style={{ transitionDelay: `${index + 1}00ms` }}>
                  {list}
                </div>
              </CSSTransition>
            ))}
        </div>
      </TransitionGroup>
    </StyledLandingPage>
  );
};

export default LandingPage;
