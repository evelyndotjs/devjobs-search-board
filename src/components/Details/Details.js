import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export default function Details(props) {
  const { id } = useParams();
  return <h1>{props.description[0]}</h1>;
}
