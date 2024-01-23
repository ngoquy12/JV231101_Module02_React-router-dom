import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/list-product">List product</NavLink>
        <NavLink to="/detail/10">Detail</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    </>
  );
}
