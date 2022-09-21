import React from "react";
import StyledButton from "../StyledButton";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 96px;
  margin-top: 50px;
  background: #fff;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  padding: 23px 0 22px;
`;

const Title = styled.h1`
  color: #19202d;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: -8px;
`;

const Subtitle = styled.h2`
  color: #6e8098;
  font-weight: 400;
  font-size: 1rem;
`;

export default function Footer(props) {
  const btnStyle = {
    background: "#5964e0",
    color: "#fff",
    padding: "0 30px",
    marginRight: "45px",
  };

  function handleClick() {
    window.open(props.apply);
  }

  return (
    <Container>
      <FlexContainer>
        <TextContainer>
          <Title>{props.position}</Title>
          <Subtitle>{props.company}</Subtitle>
        </TextContainer>
        <StyledButton
          onClick={handleClick}
          text="Apply Now"
          style={btnStyle}
        ></StyledButton>
      </FlexContainer>
    </Container>
  );
}
