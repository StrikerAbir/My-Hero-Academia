import React from "react";
import building from "../../images/academicBulding.jpg";
const Header = () => {
  return (
    <header className="mx-auto">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2 p-10 flex justify-center">
          <img
            className="rounded-3xl shadow-lg"
            src={building}
            alt="building"
          />
        </div>
        <div className="lg:p-10 px-10 lg:w-1/2">
          <div className="shadow-lg p-10 rounded-3xl border-t border-[#e92b19]">
            <h2 className="font-bold text-2xl mb-3">About My Hero Academia</h2>
            <p>
              Every person in this world have super powers. Everybody is good at
              specific things. One can play football better, other one can good
              at technology. Everyone have different power. That makes us a
              Hero. My Hero Academia is place where you can improve your ability in greater way. Not every thing, but this is educational academy, so you can improve your skills on CSE, EEE, Civil, Mechanical, Bio-Technology, Animation departments. Never forget every one is a hero.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
