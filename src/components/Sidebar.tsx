import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import styled from "styled-components";
import { animated } from "react-spring";
import { X } from "react-feather";

const StyledWrapper = styled.div`
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  z-index: 20;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: var(--transition);
`;

const StyledSidebar = styled.div`
  border: 0;
  width: min(65vw, 350px);

  .close {
    cursor: pointer;
    margin: 0 0 0 auto;
    max-width: 5px;
    max-height: 5px;
    padding: 25px 50px;
  }

  ul {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 50px auto;

    li {
      cursor: pointer;
      list-style: none;
      position: relative;
      margin: 0 auto 70px;
      counter-increment: item 1;

      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        color: var(--white);
        font-size: var(--fz-sm);
      }

      a {
        text-decoration: none;
        color: var(--light-slate);
        font-size: clamp(var(--fz-lg), 4vw, var(--fz-xl));

        &:hover {
          color: var(--white);
        }
      }
    }
  }
`;

interface PropTypes {
  animatedSidebar: any;
}

const Sidebar: React.FC<PropTypes> = ({ animatedSidebar }) => {
  const { toggleSide, dispatch1, darkTheme } = useContext(GlobalContext);

  const toggleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    dispatch1({ type: "toggleSide", payload: { isToggle: !toggleSide } });
  };

  const links = [
    {
      id: "#home",
      name: "Home",
    },
    {
      id: "#about",
      name: "About",
    },
    {
      id: "https://drilon7.vercel.app/",
      name: "Creator",
    },
    {
      id: "#subjectModule",
      name: "Subject Module",
    },
    {
      id: "/Archive",
      name: "Module Archive",
    },
  ];

  return (
    <StyledWrapper>
      <animated.div style={animatedSidebar}>
        <StyledSidebar className={`${darkTheme}`}>
          <div className="close" onClick={(event) => toggleClose(event)}>
            <X />
          </div>
          <ul>
            {links.map((link: any) => (
              <li key={link.id}>
                <a href={link.id}>{link.name}</a>
              </li>
            ))}
          </ul>
        </StyledSidebar>
      </animated.div>
    </StyledWrapper>
  );
};

export default Sidebar;
