import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #fff;
  width: 300px;
  height: 250px;
  padding: 32px;
  margin-top: 80px;
`;

const StyledTitle = styled.h1`
  color: #19202d;
  font-weight: 700;
  font-size: 1.25rem;
`;

const StyledSubtitle = styled.h2`
  color: #5964e0;
  font-size: 0.875rem;
  font-weight: 700;
  margin-top: 40px;
`;

const StyledSubheading = styled.h3`
  color: #6e8098;
  font-size: 1rem;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: auto;
  height: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Post(props) {
  return (
    <Container>
      <ImageContainer style={{ backgroundColor: props.background }}>
        <StyledImage src={props.logo} alt="company logo" />
      </ImageContainer>
      <StyledSubheading>{props.timestamp}</StyledSubheading>
      <StyledSubheading>{props.workContract}</StyledSubheading>
      <StyledLink to={`/posts/${props.id}`}>
        <StyledTitle>{props.position}</StyledTitle>
      </StyledLink>
      <StyledSubheading>{props.company}</StyledSubheading>
      <StyledSubtitle>{props.workLocation}</StyledSubtitle>
    </Container>
  );
}
