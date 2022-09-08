import React, { useContext } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Context } from "../../Context";

const Flex = styled.form`
  display: flex;
  align-items: center;
  width: 78%;
  padding: 15px;
  position: absolute;
  left: 165px;
  top: 120px;
  border-radius: 6px;
  background: #fff;
`;

const StyledTextField = styled(TextField)`
  width: 0;
  flex: 1 1 0;
`;

const StyledIcons = styled.img`
  width: auto;
  height: 24px;
  padding-right: 10px;
`;

const StyledBorder = styled.div`
  border-right: 1px solid #6e8098;
  opacity: 0.2;
  height: 50px;
  margin-right: 15px;
`;

const StyledCheckbox = styled.div`
  color: #19202d;
  font-weight: 700;
`;

export default function Search() {
  const { handleUserInput, handleUserLocation, handleUserContract } =
    useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Flex onSubmit={handleSubmit}>
      <StyledIcons src="./assets/icon-search.svg" alt="magnifying glass icon" />
      <StyledTextField
        id="search"
        variant="standard"
        placeholder="Filter by title or company..."
        InputProps={{
          disableUnderline: true,
        }}
        defaultValue=""
        onChange={handleUserInput}
      />
      <StyledBorder />
      <StyledIcons src="./assets/icon-location.svg" alt="location icon" />
      <StyledTextField
        id="location"
        variant="standard"
        placeholder="Filter by location..."
        InputProps={{
          disableUnderline: true,
        }}
        defaultValue=""
        onChange={handleUserLocation}
      />
      <StyledBorder />
      <StyledCheckbox>
        <input type="checkbox" onChange={handleUserContract} />
        <label htmlFor="contract" style={{ margin: "0 26px 0 10px" }}>
          Full Time Only
        </label>
      </StyledCheckbox>
    </Flex>
  );
}
