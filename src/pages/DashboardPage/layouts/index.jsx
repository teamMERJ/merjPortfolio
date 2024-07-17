import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";


const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

// import { Outlet } from "react-router-dom";
// import Sidebar from "../../../components/Sidebar";

// const DashboardLayout = () => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-6 bg-gray-100">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;



// import {Outlet } from "react-router-dom"
// import React from 'react'
// import Sidebar from '../../../components/Sidebar'

// const DashboardLayout = () => {
//   return (
//     <div className="flex">
//         <Sidebar/>
//         <div className="bg-secondary w-full">  <Outlet /></div>

//     </div>
//   )
// }

// export default DashboardLayout
