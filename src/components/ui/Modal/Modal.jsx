import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../Shared/Login/Login";
import Register from "../../Shared/Register/Register";

export default function Modal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 shadow-lg w-96">
        <h2 className="text-[#11111F] font-bold text-[17px] leading-[100%] mb-2">
          Welcome to <span className="text-[#0073E6]">VolunteerUz</span>
        </h2>
        <p className="text-gray-600 mt-2">Please enter your details</p>
        {isLogin ? <Login onSwitch={() => setIsLogin(false)}  /> : <Register  onSwitch={() => setIsLogin(true)} />}
        <div className="mt-4 flex justify-between">
          <span className="text-[#11111F99] font-medium font-inter text-2 leading-[100%]">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
            <button
              className="text-[#0073E6] ml-[5px]"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </span>
        </div>
        <button onClick={onClose} className="mt-4 text-red-500 w-full">
          Yopish
        </button>
      </div>
    </div>
  );
}
