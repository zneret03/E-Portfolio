import React, { useEffect } from "react";
import AosInit from "../components/utils/aos";
import { HCIFooter } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { External } from "../components/icons";
import { OtherProjects } from "../components/utils/config";

const StyledArchive = styled.div`
  margin: 50px 90px 0px;
  padding: 45px 50px 200px;

  @media (max-width: 1080px) {
    margin: -50px 90px;
    padding: 45px 50px 200px;
  }

  @media (max-width: 768px) {
    margin: 35px 0px;
    padding: 45px 50px 80px;
  }

  @media (max-width: 480px) {
    margin: 20px 0px;
    padding: 45px 50px 80px;
  }

  h4 {
    text-transform: uppercase;
    display: flex;
    letter-spacing: 3px;
    font-size: var(--fz-lg);
    align-items: center;
    padding: 0 0px 40px;
  }

  header {
    padding: 0 25px 60px;
    @media (max-width: 768px) {
      padding: 0 14px 30px;
    }
  }

  h2 {
    margin: 0 0 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: #fdf7f7;
      }
    }

    th,
    td {
      padding: 10px 25px;
      text-align: left;
      @media (max-width: 768px) {
        padding: 10px;
      }

      &:first-child {
        padding-left: 20px;
        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }

      &:last-child {
        padding-right: 20px;
        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        fill: var(--light-slate);
        width: 25px;
        height: 25px;
        margin-left: 10px;
        &:hover {
          fill: var(--green);
        }
      }
    }

    tr {
      cursor: default;
      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;
        font-family: var(--font-mono);
        color: var(--semi-black);
        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--semi-black);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: 15px;
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;
        .links-flex {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

const Archive = () => {
  useEffect(AosInit, []);
  return (
    <>
      <div className="container">
        <StyledArchive>
          <Link to="/">
            <h4>Back</h4>
          </Link>
          <header>
            <h2 className="big-heading">Archive</h2>
            <p className="subtitle">
              A big list of Human Computer Interaction Modules
            </p>
          </header>
          <div>
            <table>
              <thead>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Assignments</th>
                <th className="hide-on-mobile">Module Content</th>
                <th colSpan={2}>Preview</th>
              </thead>
              <tbody>
                {OtherProjects.map((project: any) => (
                  <tr key={project.id} data-aos="fade-up">
                    <td className="overline year">{project.projectYear}</td>
                    <td className="title">{project.projectName}</td>
                    <td className="company hide-on-mobile">
                      {project.projectMadeAt ? (
                        <a
                          href={project.projectAssignment}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{project.projectMadeAt}</span>
                        </a>
                      ) : (
                        <span>—</span>
                      )}
                    </td>

                    <td className="tech hide-on-mobile">
                      {project.projectTechnology.map(
                        (tech: any, index: number) => (
                          <span key={index}>
                            {tech}
                            {index !== tech.length && (
                              <span className="separator">&middot;</span>
                            )}
                          </span>
                        )
                      )}
                    </td>

                    <td className="links">
                      <div className="links-flex">
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          <span aria-label="External Link">
                            <External />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </StyledArchive>
      </div>
      <HCIFooter />
    </>
  );
};

export default Archive;
