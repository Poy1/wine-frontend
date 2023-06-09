import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"My Collection"} />
      <BreadCrumb title="My Collection" />
      <Container class1="mycollection-wrapper home-wrapper-2 py-5">
        
      </Container>
    </>
  );
};

export default Wishlist;
