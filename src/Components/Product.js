import "./Product.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <div className="">
      <div className="product-navbar">
        <Link to="">Product List</Link>
        <Link to="addproduct">Add Product</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
