import React from "react";

const InformaTionCart: React.FC<{ point?: string; title?: string }> = ({
  point,
  title,
}) => {
  return (
    <div className="border-[#6f3a5d] p-5 text-center border-[2px] rounded-xl">
      {point && <h1 className="lg:text-3xl font-bold">{point}</h1>}
      {title && <p className="text-[14px]">{title}</p>}
    </div>
  );
};

export default InformaTionCart;
