import React from "react";
import Card from "../ui/card";

type Props = {};

const CardComponent = (props: Props) => {
  const cardData = [
    {
      imageSrc: "/Rectangle1.png",
      title: "Find Pipito",
      subtitle:
        "While Pipito was looking for ways to escape from prison, Mastodon would ignite a war that would last for many years between Rivalz and the Earth.",
      label: "NEW EPISODES",
      tag: "ORIGINALS",
      tagClassname:
        "absolute top-4 right-[-10px] bg-purple bg-opacity-80 font-medium font-poppins text-black px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle2.png",
      title: "Clayna",
      subtitle:
        "It was the end of the road for Clayna. He was aware of this, but still one last task was waiting for him.",
      label: "",
      tag: "CLAYNOSAURZ EXCLUSIVE",
      tagClassname:
        "absolute top-4 right-[-10px] bg-gradient-custom bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle3.png",
      title: "The Fall of a Giant",
      subtitle:
        "This documentary tells the story of the rise, fall, and resurgence of an entrepreneurial venture.",
      label: "",
      tag: "RIVALZ DOCUMENTARY",
      tagClassname:
        "absolute top-4 right-[-10px] bg-grey bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle4.png",
      title: "Road to Hell",
      subtitle:
        "Experience Rivalz's unique experience in this interactive adventure full of rewards.",
      label: "",
      tag: "RIVALZ INTERACTIVE",
      tagClassname:
        "absolute top-4 right-[-10px] bg-yellow bg-opacity-80 font-medium font-poppins text-redcard px-2 py-1 text-xs",
    },
  ];

  return (
    <div className="container mx-auto mt-10 md:mt-40 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center">
      {cardData.map((card, index) => (
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
  );
};

export default CardComponent;
