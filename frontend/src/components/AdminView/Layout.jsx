import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./Sidbar";
import AdminHeader from "./Header";

export default function Adminlayaout() {
  return (
    <div className="flex min-h-screen w-full gap-16 ">
      <div>
        <AdminSidebar />
      </div>
      <div className="flex flex-col">
        <AdminHeader />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
