"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../ui/btn";
import { headerData } from "@/dummy/dummy";

const SliderComponent: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const onClick = () => {
    console.log("tıklandı");
  };


  return (
    <div className="container mx-auto mt-12 flex flex-col items-center md:flex-row">
      <div className="relative w-full md:w-1/2 lg:w-auto">
        {headerData?.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } transition duration-1000 ease-in-out`}
          >
            <Image src={item.image} alt={item.title} width={157} height={157} />
            <div className="p-4">
              <h2 className="font-poppins text-start text-[#FFC675] text-[15px] font-semibold">
                {item.title}
              </h2>
              <p className="text-white font-light font-poppins text-[15px] whitespace-pre-line">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}

        <div className="flex space-x-4  mb-16 ms-4">
          <Button
            onClick={onClick}
            buttonClass="flex items-center bg-[#F59E0B] font-poppins font-semibold text-white text-[16px] px-6 py-2 shadow-lg hover:bg-[#FBBF24] transition duration-300 border-3 border-white"
          >
            <Image
              src="/Vector.svg"
              alt="profile"
              width={15}
              height={17}
              className="object-cover me-4 "
            />
            WATCH
          </Button>
          <Button
            onClick={onClick}
            buttonClass="relative bg-black w-[151px] h-[52px] shadow-lg"
          >
            <Image src="/exc.png" alt="Sharkyfi Exclusive" layout="fill" />
          </Button>
        </div>
        <div className="absolute left-4  space-x-2">
          {headerData?.map((_, index) => (
            <button
              onClick={() => goToSlide(index)}
              key={index}
              className={`w-10 h-1 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-400"
              }`}
              
            > </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
