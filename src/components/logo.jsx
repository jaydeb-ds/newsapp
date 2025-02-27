
// this file is only for logo

import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledWrapper>
      <button data-text="Awesome" className="buttonpma">
        <span className="actual-text">&nbsp;News&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;News&nbsp;</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .buttonpma {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    animation: r1 3s ease-in-out infinite;
   /*linear*/
    border: 7px #056bfa21 solid;
    border-radius: 14px;
  }

  /* button styling */
  .buttonpma {
    --border-right: 6px;
    --text-stroke-color: rgba(85, 87, 255, 0.78);
    --animation-color: #056bfa;
    --fs-size: 1em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }
  /* this is the text, when you hover on button */
  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 1.5s;
    -webkit-text-stroke: 1px var(--animation-color);
    animation: r2 2s ease-in-out infinite;
  }
  /* hover */
  .buttonpma:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 70px var(--animation-color))
  }

  @keyframes r1 {
    50% {
      transform: rotate(-1deg) rotateZ(-10deg);
    }
  }

  @keyframes r2 {
    50% {
      transform: rotateX(-65deg);
    }
  }`;

export default Logo;
