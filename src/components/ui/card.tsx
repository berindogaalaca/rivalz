import React from "react";

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
        className="relative h-[389px] bg-cover grid content-between"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div>
          <div className={tagClassname}>{tag}</div>
        </div>
        <div className="p-4">
          {label && (
            <div className="absolute left-4 bg-lightgreen text-black px-2 py-1 text-xs font-medium font-poppins">
              {label}
            </div>
          )}
          <h3 className="text-lg font-bold font-poppins mt-6 text-white">
            {title}
          </h3>
          <p className="text-sm font-normal font-poppins text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
