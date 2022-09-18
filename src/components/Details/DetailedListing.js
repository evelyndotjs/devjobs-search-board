import React from "react";
import { data } from "../../data";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Details from "./Details";
import Footer from "./Footer";
import Nav from "../MainListing/Nav";

export default function DetailedListing() {
  const { id } = useParams();
  return (
    <>
      {data.map((post) => {
        if (post.id === parseInt(id)) {
          return (
            <div key={post.id}>
              <Nav />
              <Header
                company={post.company}
                website={post.website}
                logo={post.logo}
                background={post.logoBackground}
              />
              <Details
                position={post.position}
                timestamp={post.postedAt}
                contract={post.contract}
                location={post.location}
                description={post.description}
                requirements={post.requirements.content}
                requirementsList={post.requirements.items}
                role={post.role.content}
                roleList={post.role.items}
                apply={post.apply}
              />
              <Footer
                position={post.position}
                company={post.company}
                apply={post.apply}
              />
            </div>
          );
        }
      })}
    </>
  );
}
