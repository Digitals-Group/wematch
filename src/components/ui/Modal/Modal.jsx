import React, { useState } from "react";
import { Link } from "react-router-dom";

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

        <form className="mt-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
          />
          {isLogin && (
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none mb-[21px]"
            />
          )}
          {!isLogin && (
            <input
              type="password"
              placeholder="Create password"
              className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
            />
          )}
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
            />
          )}
          <div className="mb-[19px]">
            {!isLogin ? (
              ""
            ) : (
              <div className="flex item-center justify-between">
                <div className="flex items-center gap-[9px]">
                  <input type="checkbox" />
                  <label
                    className="font-inter font-medium text-2 leading-[100%] text-[#11111F99]"
                    htmlFor=""
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  className="text-[#0073E6] font-inter font-medium text-2 leading-[100%]"
                  to={"/"}
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </div>
          <button className="bg-[#0073E6] w-full text-white font-bold font-inter py-[7px] rounded-[5px]">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 flex justify-between">
          <span className="text-[#11111F99] font-medium font-inter text-2 leading-[100%]">
            Don’t have an account?
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
