import React from "react";

const Header: React.FC<{ title?: string; description?: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center">
      {title && <h1 className="p-2 lg:text-3xl text-xl">{title}</h1>}
      <div className="w-[100px] rounded-full m-auto h-[5px] bg-white"></div>
      {description && <p className="text-[#6d637e] p-2 pt-1">{description}</p>}
    </div>
  );
};

export default Header;
