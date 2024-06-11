import React from "react";
import CardComponent from "./card-component";
import CardBottomComponent from "./card-bottom-component";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <CardComponent />
      <CardBottomComponent />
    </>
  );
};

export default index;
