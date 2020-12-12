import React from "react";
import styled from "styled-components";
import Folder from "./icons/Folder";
import { information } from "./utils/config";

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

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
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
    height: 100%;
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
      font-size: var(--fz-xl);

      @media (max-width: 1080px) {
        font-size: var(--fz-lg);
      }
    }

    .description {
      color: var(--white);
      font-weight: lighter;
      font-size: 16px;
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
  return (
    <StyledModuleWrapper id="subjectModule">
      <h1 className="numbered-heading">Subject Module</h1>
      <div className="project-grid">
        {information.map((info: any) => (
          <StyledProject>
            <div className="project-inner">
              <header>
                <div className="project-top">
                  <div className="folder">
                    <Folder />
                  </div>
                </div>

                <h3 className="title">{info.title}</h3>

                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: info.description,
                  }}
                />
              </header>

              <footer>
                <ul className="project-tech-list">
                  {info.word.map((tech: any, index: number) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </StyledProject>
        ))}
      </div>
    </StyledModuleWrapper>
  );
};

export default Module;
