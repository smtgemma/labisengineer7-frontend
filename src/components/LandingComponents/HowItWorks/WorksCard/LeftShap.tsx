import React, { FC, PropsWithChildren } from "react";

const LeftShape: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" relative h-full w-full  ">
      <img
        src={"./shapTwo.png"}
        alt="shape"
        className="absolute top-0  left-0 z-10  object-contain"
      />
      {children}
    </div>
  );
};

export default LeftShape;
