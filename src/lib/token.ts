const tokenCatch = () => {
  const token = localStorage.getItem("accessToken") || " ";
  return token;
};

export default tokenCatch;
