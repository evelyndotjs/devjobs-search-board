import React, { useContext } from "react";
import styled from "styled-components";
import Post from "./Post";
import { Context } from "../../Context";
import { data } from "../../data";
import StyledButton from "../StyledButton";

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  margin: 0 165px;
`;

export default function Listings() {
  const {
    searchQuery,
    searchLocation,
    searchContract,
    loadMore,
    handleLoadMore,
  } = useContext(Context);

  const styledbtn = {
    backgroundColor: "#5964e0",
    color: "#fff",
    position: "relative",
    left: "50%",
    margin: "56px 0 50px",
  };

  return (
    <>
      <Grid>
        {data
          ?.slice(0, loadMore)
          .filter((post) => {
            if (
              searchQuery === "" &&
              searchLocation === "" &&
              !searchContract
            ) {
              return post;
            } else if (
              post.position
                .toLowerCase()
                .includes(searchQuery.toString().toLowerCase()) ||
              post.company
                .toLowerCase()
                .includes(searchQuery.toString().toLowerCase())
            ) {
              if (
                post.location
                  .toLowerCase()
                  .includes(searchLocation.toString().toLowerCase())
              ) {
                if (searchContract && post.contract === "Full Time") {
                  return post;
                } else if (!searchContract) {
                  return post;
                }
              }
            }
          })
          .map((post) => (
            <div className="box" key={post.id}>
              <Post
                id={post.id}
                position={post.position}
                timestamp={post.timestamp}
                company={post.company}
                workLocation={post.location}
                logo={post.logo}
                background={post.logoBackground}
                workContract={post.contract}
              />
            </div>
          ))}
      </Grid>
      <StyledButton
        style={styledbtn}
        text="Load More"
        onClick={handleLoadMore}
      ></StyledButton>
    </>
  );
}
