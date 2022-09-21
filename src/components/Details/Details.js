import React from "react";
import styled from "styled-components";
import StyledButton from "../StyledButton";

const Container = styled.div`
  background-color: #fff;
  position: absolute;
  width: 730px;
  height: auto;
  left: 355px;
  top: 292px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  color: #6e8098;
  font-weight: 400;
  font-size: 1rem;
  line-height: 26px;
  padding: 0 48px;
`;

const Location = styled(P)`
  color: #5964e0;
  font-weight: 700;
  font-size: 0.875rem;
`;

const Ul = styled(P)`
  padding: 24px 48px 10px;
  line-height: 30px;
`;

const Ol = styled.ol`
  color: #6e8098;
  font-weight: 400;
  font-size: 1rem;
  padding: 24px 48px 40px;
  line-height: 30px;
`;

const Title = styled.h1`
  color: #19202d;
  font-weight: 700;
  font-size: 1.75rem;
  padding: 0 48px;
  margin: -5px 0 -5px;
`;

const Subtitle = styled(Title)`
  font-size: 1.25rem;
  margin: 40px 0 23px;
`;

export default function Details(props) {
  const btnStyle = {
    background: "#5964e0",
    color: "#fff",
    margin: "-5px 43px 0 0",
    padding: "0 30px",
  };

  function handleClick() {
    window.open(props.apply);
  }

  return (
    <Container>
      <P style={{ marginTop: "48px" }}>
        {props.timestamp} <span style={{ margin: "10px" }}>&#x2022;</span>{" "}
        {props.contract}
      </P>
      <FlexContainer>
        <div>
          <Title>{props.position}</Title>
          <Location>{props.location}</Location>
        </div>
        <StyledButton onClick={handleClick} style={btnStyle} text="Apply Now" />
      </FlexContainer>
      <P>{props.description}</P>
      <Subtitle>Requirements</Subtitle>
      <P>{props.requirements}</P>
      <Ul>
        {props.requirementsList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </Ul>
      <Subtitle>What You Will Do</Subtitle>
      <P>{props.role}</P>
      <Ol>
        {props.roleList.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </Ol>
    </Container>
  );
}
