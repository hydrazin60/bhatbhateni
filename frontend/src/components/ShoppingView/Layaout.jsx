import React from "react";
import ShoppingHeader from "./Header";
import { Outlet } from "react-router-dom";

export default function Shoppinglayaout() {
  return (
    <div>
      <div>
        <ShoppingHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
