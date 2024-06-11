import React from "react";
import Navbar from "../navbar";
import SliderComponent from "./slider-component";
import { ConfigProvider } from "@/lib/readData";

type Props = {};

export default function Header({}: Props) {
  return (
    <ConfigProvider>
      <Navbar />
      <SliderComponent />
    </ConfigProvider>
  );
}
