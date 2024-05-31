// import React from "react";

function Navbar() {
  return (
    <div className="flex justify-center content-center bg-white p-6">
      <div className="flex gap-10 bg-slate-700 bg-opacity-90 p-4 rounded-lg text-white ">
        <button href="/home" className=" hover:text-emerald-500">
          Home
        </button>
        <button className="hover:text-emerald-500">About</button>
        <button className="hover:text-emerald-500">Projects</button>
        <button className="hover:text-emerald-500">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
