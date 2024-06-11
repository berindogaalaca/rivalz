import Head from "next/head";
import Card from "@/components/ui/card-bottom";

const CardBottomComponent: React.FC = () => {
  const cardData = [
    {
      imageSrc: "/Rectangle5.png",
      title: "GOD OF ART",
      subtitle: "Season 1 Episode 1",
      label: "NEW SERIES",
      tag: "ORIGINALS",
      tagClassname:
        "absolute top-4 right-4 bg-purple bg-opacity-80 font-medium font-poppins text-black px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle6.png",
      title: "RIOT",
      subtitle: "Season 2 Episode 12",
      label: "",
      tag: "CLAYNOSAURZ EXCLUSIVE",
      tagClassname:
        "absolute top-4 right-4 bg-gradient-custom bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle7.png",
      title: "COUNCIL",
      subtitle: "Season 1 Episode 3",
      label: "",
      tag: "RIVALZ DOCUMENTARY",
      tagClassname:
        "absolute top-4 right-4 bg-grey bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle8.png",
      title: "CAPITAL OF RIVALZ",
      subtitle: "",
      label: "",
      tag: "RIVALZ INTERACTIVE",
      tagClassname:
        "absolute top-4 right-4 bg-yellow bg-opacity-80 font-medium font-poppins text-redcard px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle6.png",
      title: "RIOT",
      subtitle: "Season 2 Episode 12",
      label: "",
      tag: "CLAYNOSAURZ EXCLUSIVE",
      tagClassname:
        "absolute top-4 right-4 bg-gradient-custom bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle7.png",
      title: "COUNCIL",
      subtitle: "Season 1 Episode 3",
      label: "",
      tag: "RIVALZ DOCUMENTARY",
      tagClassname:
        "absolute top-4 right-4 bg-grey bg-opacity-80 font-medium font-poppins text-white px-2 py-1 text-xs",
    },
    {
      imageSrc: "/Rectangle8.png",
      title: "CAPITAL OF RIVALZ",
      subtitle: "",
      label: "",
      tag: "RIVALZ INTERACTIVE",
      tagClassname:
        "absolute top-4 right-4 bg-yellow bg-opacity-80 font-medium font-poppins text-redcard px-2 py-1 text-xs",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-start mt-14">
        <h2 className="text-header text-xl font-bold mb-4">RIVALZ ORIGINALS</h2>
      </div>
      <div className="container mx-auto flex overflow-x-scroll  py-4 items-center ">
        <div className="flex mx-2 space-x-28">
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
      </div>
    </div>
  );
};

export default CardBottomComponent;
