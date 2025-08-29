"use client";
import Cookies from "js-cookie";

const tokenCatch = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

export default tokenCatch;

// const tokenCatch = () => {
//   const token = Cookies.get("accessToken");
//   return token;
// };

// export default tokenCatch;

// const tokenCatch = () => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem("token");
//   }
//   return null;
// };

// export default tokenCatch;
