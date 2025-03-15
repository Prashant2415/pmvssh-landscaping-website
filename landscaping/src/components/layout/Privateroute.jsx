import React from "react";
import Home from "../Home"; // Public Home
import SecureHomePage from "./SecureHomePage";

const Privateroute = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return isAuthenticated ? <SecureHomePage/>: <Home/>;
};

export default Privateroute;
