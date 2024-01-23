import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Outlet sẽ tượng trưng cho tât cả các component con của About */}
      <Outlet />
    </>
  );
}
