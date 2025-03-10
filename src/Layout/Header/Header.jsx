import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Opportunities",
      to: "/opportunity",
    },
    {
      name: "About Us",
      to: "/aboutus",
    },
  ];
  return (
    <header className="bg-black py-6">
      <div className="max-w-[1336px] w-full mx-auto px-[20px]">
        <div className="flex items-center justify-between">
          <Link className="text-white font-bold text-4 " to={"/"}>
            VolunteerUz
          </Link>

          <ul className="flex items-center gap-[20px]">
            {navLinks?.map((link) => (
              <li key={link.name}>
                <Link className="text-[#FFFFFF99] font-inter" to={link?.to}>
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
