"use client";
import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken") || "";
    setToken(storedToken);
  }, []);

  return token;
};

export default useToken;
