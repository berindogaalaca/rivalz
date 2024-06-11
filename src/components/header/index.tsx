import React from "react";
import Navbar from "../navbar";
import SliderComponent from "./slidercomponent";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Navbar />
      <SliderComponent/>
    </>
  );
}
