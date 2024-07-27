import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("username", username);
    navigate("/quiz");
  };

  return (
    <>
      <h2 className="text-7xl font-Patrick font-bold mb-4 text-white">
        Game Trivia
      </h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="w-5/6 border-2 text-center border-gray-300 rounded-md p-2 m-2 placeholder:text-center placeholder:text-"
      />
      <button
        onClick={handleLogin}
        className="border-2 border-gray-300 rounded-md px-8 py-1 m-3 text-2xl text-white font-Patrick"
      >
        Start
      </button>
    </>
  );
};

export default Login;
