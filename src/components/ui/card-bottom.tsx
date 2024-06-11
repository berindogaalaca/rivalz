import React from "react";
import Image from "next/image";

type CardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  label: string;
  tag: string;
  tagClassname: string;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subtitle,
  label,
  tag,
  tagClassname,
}) => {
  return (
    <div className="relative w-[284px] shadow-lg text-black">
      <div
        className="relative h-[135px]   content-between flex justify-center items-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {label && (
          <div className="absolute top-4 left-[-10px] bg-lightgreen bg-opacity-80 text-black px-2 py-1 text-xs font-medium font-poppins">
            {label}
          </div>
        )}
        <div className="text-center text-white">
          <h3 className="text-lg font-bold font-poppins">{title}</h3>
          <p className="text-sm font-normal font-poppins">{subtitle}</p>
        </div>
        <div className="absolute bottom-4 right-4 text-white">
          <Image
            src="/Vector.svg"
            alt="profile"
            width={15}
            height={17}
            className="object-cover me-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
