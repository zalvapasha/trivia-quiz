import React from "react";
import Login from "../components/Login";
import Logo from "../assets/logo.webp";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl h-screen mx-auto p-4">
      <div className="flex justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600 to-indigo-500 rounded-[40px] h-full w-full">
        <div className="m-2 flex flex-col justify-center items-center relative">
          <img src={Logo} className="bottom-48 mb-10 absolute" />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
