import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 pt-5 text-white mix-blend-difference">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide leading-none">
        Rishabh
        <br />
        <span className="block indent-5">Tripathi.</span>
      </h1>
    </nav>
  );
};

export default Navbar;
