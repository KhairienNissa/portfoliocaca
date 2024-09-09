import React from "react";
import Logo from "../assets/logo.svg";


const Header = () => {
  return (
    <header className="py-6">
      <div className=" mx-auto">
        <div className="flex justify-between ">
          <a href="#">
            <p className=" text-3xl font-bold text-gradient">Khairien</p>
            <p className="text-3xl font-bold">Nissa</p>
          </a>
          <button
            onClick={(e) => {
              window.location.href =
                "mailto:cacakhairien@gmail.com?&body=Let's work together!";
              e.preventDefault();
            }}
            className="btn btn-sm"
          >
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
