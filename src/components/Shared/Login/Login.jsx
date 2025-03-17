import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="mt-4">
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border-b border-[#130B544D] mb-2 outline-none"
      />
      <div className="mb-[19px] flex justify-between items-center">
        <div className="flex items-center gap-[9px]">
          <input type="checkbox" />
          <label className="text-[#11111F99]">Remember me</label>
        </div>
        <Link className="text-[#0073E6]" to={"/forgot-password"}>
          Forgot password?
        </Link>
      </div>
      <button className="bg-[#0073E6] w-full text-white font-bold py-[7px] rounded-[5px]">
        Login
      </button>
    </form>
  );
};

export default Login;
