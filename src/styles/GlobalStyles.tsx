import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        padding : 0;
        margin : 0;
        font-family : var(--font-mono);
    }

    :root {
        --white : #86C7D0;
        --semi-black : #2E3037;
        --pink : #928889;
        --semi-pink : #C5969A;

        --font-segoe : "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
        --font-sans: 'Calibre',  'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;


        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --border-radius: 4px;
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        --transform : translateY(-10px);
    }

    h1,h2,h3,h4,h5,h6{
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--semi-black);
    line-height: 1.1;


    @media (max-width : 480px){
      font-weight: 800;
    }
  }
/* 
    .background {
        background: url("/image/background.svg") no-repeat;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        filter: contrast(1.1);
    } */

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    @-moz-document url-prefix(){
      font-size : var(--fz-heading);
      @media (max-width: 1080px) {
        font-size : var(--fz-heading);
      }

      @media (max-width: 768px) {
        font-size : var(--fz-xxl);
      }
    }
    
    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      margin-right: 10px;
      color: var(--semi-black);

      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
      @media (max-width: 1080px) {
        width: 200px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }



  section {
    margin : 0 auto;
    max-width: 1100px;
    padding: 0 0 250px;
    transition: var(--transition);

    @media (max-width: 1080px) {
      padding: 0 50px 200px;
    }

    @media (max-width: 768px) {
      padding: 0 25px 180px;
    }

    @media (max-width: 495px) {
      padding: 0 20px 170px;
    }                 
  }
`;

export default GlobalStyles;
