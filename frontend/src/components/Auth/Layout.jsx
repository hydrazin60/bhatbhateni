import React from "react";
import { Outlet } from "react-router-dom";

export default function Authlayout() {
  return (
    <div className="flex min-h-screen w-full ">
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-black "></div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12  ">
        <Outlet />
      </div>
    </div>
  );
}
