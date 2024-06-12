import Head from "next/head";
import Card from "@/components/ui/card-bottom";
import { cardBottomData } from "@/dummy/dummy";

const CardBottomComponent: React.FC = () => {

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-start mt-14">
        <h2 className="text-header text-xl font-bold mb-4">RIVALZ ORIGINALS</h2>
      </div>
      <div className="container mx-auto flex overflow-x-scroll  py-4 items-center ">
        <div className="flex mx-2 space-x-28">
          {cardBottomData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
              label={card.label}
              tag={card.tag}
              tagClassname={card.tagClassname}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBottomComponent;
