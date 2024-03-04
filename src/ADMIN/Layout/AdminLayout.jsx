import React from "react";
import Left from "./Left";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AdminLayout() {
  return (
    <>
      <div className="flex">
        <div className="flex">
          <Left />
        </div>

        <div className="flex flex-col w-full">
          <div className="">
            <Header />
          </div>
          <div className="">
            <Outlet/>
          </div>
        </div>
        
      </div>
      {/* <Outlet/> */}
    </>
  );
}

export default AdminLayout;
