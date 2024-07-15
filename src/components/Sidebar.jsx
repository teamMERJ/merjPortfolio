import { Link, useLocation } from "react-router-dom"
import K from "../constants"


const Sidebar = () => {
const {pathname}= useLocation()
const paths = pathname.split("/")
const currentPath = paths[2]

    return (
        <>
        <div className="flex flex-row justify-center gap-x-4 h-screen  border-r ml-3 text-primary">
            <div className=" flex flex-col justify-center content-center ">
                <div className="">
                </div>
                <div className=" flex flex-col justify-center items-center gap-y-3  w-[240px]">
                {K.DASHBOARDLINKS.map(
                    (item, index) => {
                        return (
                        <Link key={index} to={item.path} 
                        className={`flex text-center gap-x-2 w-full pl-5 py-2 hover:shadow-lg 
                        
                        ${ currentPath == item.path && "bg-primary text-white rounded-l-[20px]" }` }>
                            
                            <span className="relative"> 
                            {item.Icon}
                            </span>  
                            <span className="relative">{item.name}</span>
                            </Link>)
                    }
                )

                }
                </div> 
            </div>
        </div>
        </>
    )
}

export default Sidebar




// import { Link } from "react-router-dom";
// import Overview from "../pages/DashboardPage/Pages/Overview";
// import Skills from "../pages/DashboardPage/Pages/Skills";
// import Experiences from "../pages/DashboardPage/Pages/experiences";
// import Education from "../pages/DashboardPage/Pages/education";
// import Achivements from "../pages/DashboardPage/Pages/Achivements";
// import Projects from "../pages/DashboardPage/Pages/projects";
// import { Home } from "lucide-react";
// import K from "../konstants";
// const Sidebar = () => {
//   return (
//     <div className="h-screen shadow-2xl w-[250px] text-secondary flex flex-col bg-primary px-8 py-12">
//       <span className="text-2xl ">merjPorfolio</span>
//       <div className="flex flex-col gap-y-5 mt-5">
//         {K.NAVLINKS.map(({ icon, text, link }, index) => (
//           <Link>
           
//           </Link>
//         ))}
//       </div>

//       <nav className="flex flex-col space-y-2 p-4">
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Overview /></span>
//         </Link>
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Skills /></span>
//         </Link>
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Experiences /></span>
//         </Link>
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Education /></span>
//         </Link>
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Achivements /></span>
//         </Link>
//         <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
//         <Home className="w-6 h-6" />
//         <span><Projects /></span>
//         </Link>
        
//     </nav>
//     </div>
//   );
// };

// export default Sidebar;
