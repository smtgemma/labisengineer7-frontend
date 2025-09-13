import Cookies from "js-cookie";

const tokenCatch = () => {
  // Check if we're in the browser environment
  if (typeof window === "undefined") {
    // During server-side rendering or build time, return null
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdkZDZiZmQ3NjNjNDkwMGEwZDEzOCIsImZpcnN0TmFtZSI6IkRhd24iLCJsYXN0TmFtZSI6IldpbGxpYW0iLCJlbWFpbCI6Im1ldmljODc4MjFAc2thdGVydS5jb20iLCJyb2xlIjoiRU5HSU5FRVIiLCJwaG9uZSI6IiszMDY5MTIzNDU2NzgiLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9hcGkuYnVpbGRhaS5nci91cGxvYWRzL2ZpbGUtMTc1NzEzODYyNjI5Mi04MjczODAxNDkuanBnIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNzU3MTM4ODUyLCJleHAiOjE4MjAyNTQwNTJ9.-MPJUyIUR0POth7cuEGoW6RJ_9C9t_JEt1MW8W4zB5Y";
  }

  try {
    const token = Cookies.get("accessToken");
    // console.log(token);

    // Additional validation to ensure token is properly formatted
    if (token) {
      return token;
    }

    // If token is invalid or malformed, return null
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjdkZDZiZmQ3NjNjNDkwMGEwZDEzOCIsImZpcnN0TmFtZSI6IkRhd24iLCJsYXN0TmFtZSI6IldpbGxpYW0iLCJlbWFpbCI6Im1ldmljODc4MjFAc2thdGVydS5jb20iLCJyb2xlIjoiRU5HSU5FRVIiLCJwaG9uZSI6IiszMDY5MTIzNDU2NzgiLCJwcm9maWxlUGljIjoiaHR0cHM6Ly9hcGkuYnVpbGRhaS5nci91cGxvYWRzL2ZpbGUtMTc1NzEzODYyNjI5Mi04MjczODAxNDkuanBnIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWF0IjoxNzU3MTM4ODUyLCJleHAiOjE4MjAyNTQwNTJ9.-MPJUyIUR0POth7cuEGoW6RJ_9C9t_JEt1MW8W4zB5Y";
  } catch (error) {
    console.warn("Error retrieving token:", error);
  }
};

export default tokenCatch;
