import React from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./pages/not-found/NotFound";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import CreateProduct from "./pages/admin/create-product/CreateProduct";
import ManageProducts from "./pages/admin/manage-product/ManageProducts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUser from "./pages/admin/create-user/CreateUser";
import ManageUsers from "./pages/admin/manage-users/ManageUsers";
import SingleItem from "./pages/singleItem/SingleItem";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="products/:id" element={<SingleItem />} />
          <Route path="admin" element={<Admin />}>
            <Route path="create" element={<CreateProduct />} />
            <Route path="manage" element={<ManageProducts />} />
            <Route path="userCreate" element={<CreateUser />} />
            <Route path="userManage" element={<ManageUsers />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </>
  );
};

export default App;
