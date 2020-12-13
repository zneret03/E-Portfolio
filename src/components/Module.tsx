import React, { useEffect } from "react";
import AosInit from "./utils/aos";
import styled from "styled-components";
import { Folder } from "./icons";
import { Link } from "react-router-dom";
import { OtherProjects } from "./utils/config";

const StyledModuleWrapper = styled.section`
  @media (max-width: 1080px) {
    padding: 230px 0 0 0;
  }

  @media (max-width: 740px) {
    padding: 200px 0 0 0;
  }

  h1 {
    margin: 0 auto;
    max-width: 300px;

    @media (max-width: 740px) {
      max-width: 250px;
    }
  }

  .more-button {
    display: flex;
    justify-content: center;
    margin: 80px auto 0;
    background-color: transparent;
    border: 1px solid var(--white);
    border-radius: var(--border-radius);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;

    &:hover,
    &:focus,
    &:active {
      background-color: #f5f3f3;
      outline: none;
    }

    &:after {
      display: none !important;
    }

    a {
      color: var(--white);
      text-decoration: none;
    }
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledProject = styled.div`
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    .project-inner {
      transform: translateY(-10px);
    }
  }

  .project-inner {
    background: #ffffff;
    box-shadow: 0 10px 30px -15px var(--white);
    transition: var(--transition);
    position: relative;
    height: 300px;
    padding: 2rem 2.1rem;
    border-radius: var(--border-radius);
    transition: var(--transition);

    @media (max-width: 1080px) {
      padding: 2rem 1.8rem;
    }

    .folder {
      margin-bottom: 18px;
      svg {
        fill: var(--green);
        width: 40px;
        height: 40px;
      }
    }

    .title {
      margin: 0 0 15px;
      line-height: 28px;
      color: var(--semi-black);
      font-size: clamp(15, 4vw, var(--fz-xl));

      @media (max-width: 1080px) {
        font-size: var(--fz-lg);
      }
    }

    .description {
      color: var(--white);
      font-weight: lighter;
      font-size: 16px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }

    .project-tech-list {
      display: flex;
      align-items: flex-end;
      flex-grow: 1;
      flex-wrap: wrap;
      padding: 0;
      color: var(--white);
      margin: 30px 0 0 0;
      list-style: none;

      li {
        font-family: var(--font-mono);
        font-size: var(--fz-xxs);
        line-height: 1.75;
        &:not(:last-of-type) {
          margin-right: 15px;
        }
      }
    }
  }
`;

const Module: React.FC = () => {
  const GRID_LIMIT = 6;
  const firstSix = OtherProjects.slice(0, GRID_LIMIT);

  const redirectPDF = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    demo: string
  ) => {
    event.preventDefault();

    window.location.href = demo;
  };

  useEffect(AosInit, []);

  return (
    <StyledModuleWrapper id="subjectModule">
      <h1 className="numbered-heading">Subject Module</h1>
      <div className="project-grid">
        {firstSix &&
          firstSix.map((info: any) => (
            <StyledProject
              onClick={(event) => redirectPDF(event, info.demo)}
              data-aos="fade-up"
            >
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <div className="folder">
                      <Folder />
                    </div>
                  </div>

                  <h3 className="title">{info.projectTitle}</h3>

                  <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: info.projectDescription,
                    }}
                  />
                </header>

                <footer>
                  <ul className="project-tech-list">
                    {info.projectTechnology.map((tech: any, index: number) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </StyledProject>
          ))}
      </div>
      <button className="more-button" data-aos="fade-up">
        <Link to="/Archive">Show Archive</Link>
      </button>
    </StyledModuleWrapper>
  );
};

export default Module;
