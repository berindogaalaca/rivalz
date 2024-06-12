import React from "react";
import Card from "../ui/card";
import { cardData } from "@/dummy/dummy";

const CardComponent = () => {
  return (
    <div className="container mx-auto mt-40 md:mt-40 flex flex-col items-center md:grid md:grid-cols-2  md:justify-between lg:grid-cols-3 xl:grid-cols-4">
      {cardData.map((card, index) => (
        <div key={index} className="mb-3 md:mb-0 mx-6">
          <Card
            imageSrc={card.imageSrc}
            title={card.title}
            subtitle={card.subtitle}
            label={card.label}
            tag={card.tag}
            badgeType={card.badgeType}
          />
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
