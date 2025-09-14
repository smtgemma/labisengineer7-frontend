import React, { FC, PropsWithChildren } from "react";

const RightShape: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative h-full w-full  ">
      {/* <img
        src={"./shapOne.png"}
        alt="shape"
        className="absolute top-0 right-0 h-full z-[999] w-2/5 object-cover"
      /> */}
      <img
        src={"./shapOne.png"}
        alt="shape"
        className="absolute top-20 right-[-322px] z-10 h-[1100px] w-[70%] object-contain"
      />
      {children}
    </div>
  );
};

export default RightShape;
