import React from "react";
import Particles from "react-particles-js";

const Bubble: React.FC = () => {
  const settings: any = {
    particles: {
      number: {
        value: 101,
        density: {
          enable: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 1,
        },
      },
      line_linked: {
        enable: false,
      },
      color: {
        value: [
          "#447692",
          "#B58DDE",
          "#ED0505",
          "#54AB2B",
          "#10D824",
          "#ED0505",
        ],
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          size: 0,
          opacity: 0,
        },
        repulse: {
          distance: 400,
          duration: 4,
        },
      },
    },
  };
  return (
    <>
      <Particles params={settings} style={{ position: "fixed", zIndex: -1 }} />
    </>
  );
};

export default Bubble;
