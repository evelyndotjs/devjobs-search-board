import React from "react";
import styled from "styled-components";
import StyledButton from "../StyledButton";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  position: absolute;
  width: 730px;
  height: 140px;
  left: 355px;
  top: 120px;
`;

const ImageContainer = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  margin-left: 40px;
`;

const StyledSubtitle = styled.h2`
  color: #6e8098;
  font-weight: 400;
  font-size: 1rem;
  margin-top: -20px;
  transform: lowercase;
`;

export default function Header(props) {
  const btnstyle = {
    background: "rgba(89, 100, 224, 0.1)",
    borderRadius: "5px",
    color: "#5964e0",
    margin: "0 43px 0 auto",
    width: "160px",
  };

  function handleClick() {
    window.open(props.website);
  }

  return (
    <FlexContainer>
      <ImageContainer style={{ backgroundColor: props.background }}>
        <img src="/assets/logos/blogr.svg" alt="company logo" />
      </ImageContainer>
      <TitleContainer>
        <h1>{props.company}</h1>
        <StyledSubtitle>{props.company}.com</StyledSubtitle>
      </TitleContainer>
      <StyledButton
        onClick={handleClick}
        style={btnstyle}
        text="Company Site"
      ></StyledButton>
    </FlexContainer>
  );
}
