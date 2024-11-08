import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authlayout from "./components/Auth/Layout";
import Login from "./pages/UserAuth/Login";
import Register from "./pages/UserAuth/Register";
import Adminlayaout from "./components/AdminView/Layout";
import AdminDashboard from "./pages/AdminView/Dashboard";
import AdminOrders from "./pages/AdminView/Orders";
import AdminProduct from "./pages/AdminView/Product";
import AdminFeatures from "./pages/AdminView/Features";
import ShoppingHome from "./pages/Shopping/Home";
import Shoppinglayaout from "./components/ShoppingView/Layaout";
import ShoppingListing from "./pages/Shopping/Listing";
import ShoppingCheckout from "./pages/Shopping/Checkout";
import UserAccount from "./pages/Shopping/Account";
import NotFound from "./pages/NotFound";
import UnAuthPage from "./pages/unAuthorizePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<Adminlayaout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<Shoppinglayaout />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />{" "}
          <Route path="checkout" element={<ShoppingCheckout />} />{" "}
          <Route path="account" element={<UserAccount />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/unAuthrized" element={<UnAuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}
