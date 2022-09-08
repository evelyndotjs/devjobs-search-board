import React from "react";
import styled from "styled-components";
import { data } from "../../data";
import { useParams } from "react-router-dom";

export default function Header() {
  const { id } = useParams();
  return (
    <>
      {data.map((post) => {
        if (post.id === parseInt(id)) {
          return (
            <div>
              <h1>{post.position}</h1>
              <h2>{post.company}</h2>
              <h3>{post.location}</h3>
            </div>
          );
        }
      })}
    </>
  );
}
