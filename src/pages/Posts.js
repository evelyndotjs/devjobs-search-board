import React from "react";
import Nav from "../components/MainListing/Nav";
import Header from "../components/Details/Header";
import Details from "../components/Details/Details";
import { data } from "../data";

export default function Posts() {
  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

{
  /* <Header />
{data.map((post) => (
  <Details key={post.id} id={post.id} description={post.description} />
))} */
}
