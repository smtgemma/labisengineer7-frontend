import React, { FC, PropsWithChildren } from "react";

const ShapTwo: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="  h-full w-full  ">
      <img
        src={"./leftDownShape.png"}
        alt="shape"
        className="absolute buttom-0 left-0 z-10   object-contain"
      />
      {children}
    </div>
  );
};

export default ShapTwo;
