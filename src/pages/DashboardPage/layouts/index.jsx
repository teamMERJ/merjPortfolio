import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { getToken } from "../../../services/config";
import { apiGetProfile } from "../../../services/profile";
import { toast } from "react-toastify";


const DashboardLayout = () => {
  const [profile, setProfile] = useState();

  const token = getToken();

  const getUserProfile = async () => {
    try {
      const response = await apiGetProfile();
      const userProfileData = response?.data.profile;
      setProfile(userProfileData)
    } catch (error) {
      toast.error("An error occured")
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
  }, []);

  if (!token) {
    return <Navigate to="/sign" />;
  }

  // const getAvatar = () => {
  //   if (!profile) return "N/A";
  //   const initials = '${profile.firstName[0]}${profile.lastName[0]}';
  //   return initials.toUpperCase();
  // }


  return (
    <>
      <div className="flex ">
          <Sidebar />
        <div className="w-full">
        <div className="">
          {/* <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <SquareMenu className="size-8" />
          </span> */}
          <Link
            to="/dashboard/profile"
            // className="ml-auto bg-pink p-4 rounded-full cursor-pointer"
          >
            {/* <span className="text-xl font-semibold text-white">
              {getAvatar()}
            </span> */}
          </Link>
        </div>
          <Outlet context={[profile, setProfile]}/>
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
