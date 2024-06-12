import Head from "next/head";
import Card from "@/components/ui/card-bottom";
import { cardBottomData } from "@/dummy/dummy";
import './custom-scroll.css';
const CardBottomComponent: React.FC = () => {

  return (
    <div className="container mx-auto mb-28">
      <div className="flex flex-col justify-center items-start mt-14">
        <h2 className="text-header text-xl  px-8 font-bold mb-4">RIVALZ ORIGINALS</h2>
      </div>
      <div className="container mx-auto flex custom-scroll px-8  py-4 items-center ">
        <div className="flex  space-x-24">
          {cardBottomData.map((card, index) => (
            <Card
              key={index}
              tagClassname={card.tagClassname}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
              label={card.label}
              tag={card.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBottomComponent;
