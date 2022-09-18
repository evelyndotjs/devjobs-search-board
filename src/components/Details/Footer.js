import React from "react";
import StyledButton from "../StyledButton";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 1600px;
  height: 96px;
  left: 0px;
  top: 1500px;
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

const Title = styled.h1`
  color: #19202d;
  font-weight: 700;
  font-size: 1.25rem;
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
        <div>
          <Title>{props.position}</Title>
          <h2>{props.company}</h2>
        </div>
        <StyledButton
          onClick={handleClick}
          text="Apply Now"
          style={btnStyle}
        ></StyledButton>
      </FlexContainer>
    </Container>
  );
}
