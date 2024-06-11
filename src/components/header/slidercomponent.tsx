"use client";
import Image from "next/image";
import React, { useState } from "react";

type Slide = {
  id: number;
  image: string;
  title: string;
  paragraph: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/home1.png",
    title: "Presented by Rivalz Studios",
    paragraph: `Kiko is the most cheerful and adventurous shark of the sea.\nHowever, Kiko's passion for learning and curiosity are different from other sharks.\nOne day, he comes across the wreckage of an old submarine at the bottom of the sea.\nKiko is determined to find out what's inside this mysterious wreck.`,
  },
  {
    id: 2,
    image: "/home1.png",
    title: "Slide 2",
    paragraph:`Kiko is the most cheerful and adventurous shark of the sea.\nHowever, Kiko's passion for learning and curiosity are different from other sharks.\nOne day, he comes across the wreckage of an old submarine at the bottom of the sea.\nKiko is determined to find out what's inside this mysterious wreck.`,
  },
  {
    id: 3,
    image: "/home1.png",
    title: "Slide 3",
    paragraph:`Kiko is the most cheerful and adventurous shark of the sea.\nHowever, Kiko's passion for learning and curiosity are different from other sharks.\nOne day, he comes across the wreckage of an old submarine at the bottom of the sea.\nKiko is determined to find out what's inside this mysterious wreck.`,
  },
  {
    id: 4,
    image: "/home1.png",
    title: "Slide 4",
    paragraph:`Kiko is the most cheerful and adventurous shark of the sea.\nHowever, Kiko's passion for learning and curiosity are different from other sharks.\nOne day, he comes across the wreckage of an old submarine at the bottom of the sea.\nKiko is determined to find out what's inside this mysterious wreck.`,
  },
];

const SliderComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const goToSlide = (index: number) => {
      setCurrentSlide(index);
    };
  
    return (
        <div className="container mx-auto mt-12 flex">
          <div className="relative w-1/2">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${
                  index === currentSlide ? "block" : "hidden"
                } transition duration-1000 ease-in-out`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={157}
                  height={157}
                />
                <div className="p-4">
                  <h2 className="font-poppins text-start text-[#FFC675] text-[15px] font-semibold">
                    {slide.title}
                  </h2>
                  <p className="text-white font-light font-poppins text-[15px] whitespace-pre-line">
                    {slide.paragraph}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute left-4  space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-2 rounded-full ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        
      </div>
    );
  };

export default SliderComponent;
