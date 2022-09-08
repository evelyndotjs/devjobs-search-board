import React from "react";
import Nav from "../components/MainListing/Nav";
import Search from "../components/MainListing/Search";
import Listings from "../components/MainListing/Listings";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <Search />
      <Listings />
    </>
  );
}
