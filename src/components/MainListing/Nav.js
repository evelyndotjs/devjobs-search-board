import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-image: url(/assets/bg-pattern-header.svg);
  height: 161px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledTitle = styled.h1`
  color: #fff;
  position: absolute;
  width: 115px;
  height: 32px;
  left: 165px;
  top: 44px;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledTitle>devjobs</StyledTitle>
    </StyledNav>
  );
}
