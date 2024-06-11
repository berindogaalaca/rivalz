"use client";
import { useState } from "react";
import { Menu } from "react-feather";
import LinkButton from "@/components/ui/link-button";
import ProfileCard from "@/components/navbar/profile-card";
import Button from "../ui/btn";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto pt-4">
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          buttonClass="md:hidden text-white"
        >
          {" "}
          <Menu />
        </Button>
      </div>
      <div
        className={`md:flex md:justify-between md:items-center w-full md:w-auto mt-4 md:mt-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-2 md:space-y-0">
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="HOME"
          />
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="RIVALZ ORIGINALS"
          />
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="EXCLUSIVE SERIES"
          />
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="MOVIES"
          />
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="DOCUMENTARY"
          />
          <LinkButton
            className="text-white text-[15px] font-poppins"
            linkText="INTERACTIVE"
          />
        </div>
        <ProfileCard profileImageSrc="/profile.png" userName="Leao" />
      </div>
    </div>
  );
}
