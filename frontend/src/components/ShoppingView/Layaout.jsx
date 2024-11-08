import React from "react";
import ShoppingHeader from "./Header";
import { Outlet } from "react-router-dom";

export default function Shoppinglayaout() {
  return (
    <div>
      <div>
        <div>
          <ShoppingHeader />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
