import React, { useEffect } from "react";
import styled from "styled-components";
import AosInit from "./utils/aos";

const StyledAboutSection = styled.section`
  max-width: 1000px;
  margin-bottom: 150px;

  @media (max-width: 1080px) {
    padding: 0px 90px;
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 60px;
    margin-bottom: 80x;
  }

  @media (max-width: 492px) {
    padding: 0px 30px;
    margin-bottom: 60px;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 60px;
    align-items: center;

    @media (max-width: 953px) {
      display: block;
      position: relative;
    }
  }
`;

const StyledText = styled.div`
  padding: 0;
  overflow: hidden;
  list-style: none;
  color: #73b1b9;

  p {
    margin: 35px 0 0 0;
    font-size: var(--fz-lg);
    line-height: 25px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 500px;

  @media (max-width: 953px) {
    margin: 50px auto 0px;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;

    img {
      text-align: center;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      width: 100%;
      object-fit: cover;
      max-height: 350px;

      @media (max-width: 780px) {
        margin: 0 auto;
      }
    }
  }
`;

const About = () => {
  useEffect(AosInit, []);

  return (
    <StyledAboutSection data-aos="fade-up" id="about">
      <div className="inner">
        <StyledText>
          <h2 className="numbered-heading">What is HCI?</h2>
          <p>
            Human–computer interaction studies the design and use of computer
            technology, focused on the interfaces between people and computers.
            Researchers in the field of HCI observe the ways in which humans
            interact with computers and design technologies that let humans
            interact with computers in novel ways
          </p>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <img src="/image/AboutImage.jpg" alt="" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
