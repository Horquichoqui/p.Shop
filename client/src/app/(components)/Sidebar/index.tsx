"use client";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* TOPO || TOP LOGO  */}
      <div className="flex g-3 justify-between md:justify-normal items-center pt-8">
        <div>Logo</div>
        <h1 className="font-extrabold text-2xl">Job</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8">
        {/* LINKS AQUI || LINKS HERE */}
      </div>

        {/* PARTE DE BAIXO || FOOTER  */}
      <div className="text-center text-xs text-gray-500 ">
        &copy; 2025- Horquichoqui/Gabriel Job
      </div>
    </div>
  );
};

export default Sidebar;
