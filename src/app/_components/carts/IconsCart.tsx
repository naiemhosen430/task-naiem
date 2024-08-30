"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IconData {
  src: string;
  alt: string;
}

interface IconsCartProps {
  icons: IconData[];
}

const IconsCart: React.FC<IconsCartProps> = ({ icons }) => {
  const [groupIcons, setGroupIcons] = useState<IconData[][]>([]);

  useEffect(() => {
    if (icons?.length > 0) {
      // Group the icons into arrays of 5 items
      const grouped = [];
      for (let i = 0; i < icons.length; i += 2) {
        grouped.push(icons.slice(i, i + 2));
      }
      setGroupIcons(grouped);
    }
  }, [icons]);

  console.log(groupIcons);

  return (
    <div className="p-2 lg:flex lg:flex-shrink-0">
      {groupIcons.map((group, groupIndex) => (
        <div
          className={`inline-block ${
            groupIndex % 2 !== 0 ? "lg:mt-[60px]" : ""
          }`}
          key={groupIndex}
        >
          {group.map((data, i) => (
            <div className={`block lg:w-full`} key={i}>
              <Image
                className="w-[80px] m-[30px] my-[50px] border-[3px] border-[#ad7ad6] rounded-full h-[80px]"
                src={data.src}
                alt={data.alt}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default IconsCart;
