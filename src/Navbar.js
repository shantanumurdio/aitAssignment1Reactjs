import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="border-black  grid grid-flow-col  bg-slate-400 py-3">
      <div className="flex items-center">
        <img
          className="h-7 cursor-pointer px-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburgermenu"
          onClick={toggleSidebar}
        />
        <img
          className="h-20"
          src="https://aitglobalindia.com/wp-content/uploads/2019/07/cropped-AIT-indiaLogo-file-180x180.png"
          alt="companyLogo"
        />
      </div>
      <div>
        <ul className="flex justify-evenly item-center  border-black h-full items-center ">
          <li className="hover:bg-black hover:text-white px-2 py-2 rounded cursor-pointer font-bold">Home</li>
          <li className="hover:bg-black hover:text-white px-2 py-2 rounded cursor-pointer font-bold">About</li>
          <li className="hover:bg-black hover:text-white px-2 py-2 rounded cursor-pointer font-bold">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
