"use client";
import { useState } from "react";
import { Menu } from "react-feather";
import LinkButton from "@/components/ui/link-button";
import ProfileCard from "@/components/navbar/profile-card";
import Button from "../ui/btn";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const linkButtonData = [
    { className: "text-white text-[15px] font-poppins", linkText: "HOME" },
    {
      className: "text-white text-[15px] font-poppins",
      linkText: "RIVALZ ORIGINALS",
    },
    {
      className: "text-white text-[15px] font-poppins",
      linkText: "EXCLUSIVE SERIES",
    },
    { className: "text-white text-[15px] font-poppins", linkText: "MOVIES" },
    {
      className: "text-white text-[15px] font-poppins",
      linkText: "DOCUMENTARY",
    },
    {
      className: "text-white text-[15px] font-poppins",
      linkText: "INTERACTIVE",
    },
  ];
  return (
    <div className="container mx-auto pt-4 relative">
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          buttonClass="md:hidden text-white"
        >
          <Menu />
        </Button>
      </div>
      <div
        className={`md:flex md:justify-between md:items-center w-full md:w-auto mt-4 md:mt-0 absolute md:relative ${
          isOpen ? "block" : "hidden"
        } bg-slate-500 md:bg-transparent z-50 p-4 md:p-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-2 md:space-y-0">
          {linkButtonData.map((button, index) => (
            <LinkButton
              key={index}
              className={button.className}
              linkText={button.linkText}
            />
          ))}
        </div>
        <ProfileCard profileImageSrc="/profile.png" userName="Leao" />
      </div>
    </div>
  );
}
