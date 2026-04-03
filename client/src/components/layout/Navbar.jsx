import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold">
          A
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">Arun Kumar</h2>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-5 text-gray-600 text-xl">
        <button className="hover:text-green-500 transition">🔍</button>
        <button className="hover:text-green-500 transition">⋮</button>
      </div>
    </div>
  );
};

export default Navbar;