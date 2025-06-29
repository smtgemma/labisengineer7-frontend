import { ReactNode } from "react";

type containerProps = {
  children: ReactNode;
};


const Container = ({ children }: containerProps) => {
  return <div className="max-w-[1320px] mx-auto   px-3 xl:px-0">{children}</div>;

}

export default Container;