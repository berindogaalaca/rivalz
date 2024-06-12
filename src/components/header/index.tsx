import React from "react";
import Navbar from "../navbar";
import SliderComponent from "./slider-component";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Navbar />
      <SliderComponent />
    </>
  );
}
