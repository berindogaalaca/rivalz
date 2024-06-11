"use client"
import Image from "next/image";
import React, { useState } from "react";
import LinkButton from "@/components/ui/link-button";

type Props = {
  profileImageSrc: string;
  userName: string;
};

const ProfileCard: React.FC<Props> = ({ profileImageSrc, userName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2 p-2">
        <Image
          src={profileImageSrc}
          alt="profile"
          width={40}
          height={40}
          className="object-cover"
        />
        <div className="text-white flex items-center">
          <span className="font-semibold">{userName}</span>
          <button onClick={toggleDropdown} className="ml-1 focus:outline-none">
            &#9662;
          </button>
        </div>
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <LinkButton
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              linkText="Profil"
              href="#profile"
            />
            <LinkButton
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              linkText="Ayarlar"
              href="#settings"
            />
            <LinkButton
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              linkText="Çıkış Yap"
              href="#logout"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
