import React, { FC, PropsWithChildren } from "react";

const ShapOne: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full w-full rounded-xl flex items-center justify-center relative ">
      <img
        src={"./shapOne.png"}
        alt="shape"
        className="absolute top-0 right-0 h-full z-10 w-2/5 object-cover"
      />
      {children}
    </div>
  );
};

export default ShapOne;
