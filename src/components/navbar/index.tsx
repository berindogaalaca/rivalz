"use client";
import { useState } from "react";
import { Menu } from "react-feather";
import LinkButton from "@/components/ui/link-button";
import ProfileCard from "@/components/navbar/profile-card";
import Button from "../ui/btn";
import { linkButtonData } from "@/dummy/dummy";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto pt-4 relative">
      <div className="flex justify-between items-center">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          buttonClass="lg:hidden mx-5 text-white"
        >
          <Menu />
        </Button>
      </div>
      <div
        className={`lg:flex lg:justify-between lg:items-center w-full lg:w-auto mt-4 lg:mt-0 absolute lg:relative ${
          isOpen ? "block" : "hidden"
        } bg-slate-500 lg:bg-transparent z-50 p-4 lg:p-0`}
      >
        <div className="flex flex-col lg:flex-row lg:space-x-16  lg:space-y-0">
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
