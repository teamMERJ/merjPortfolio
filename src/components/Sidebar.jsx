import { Link, useLocation, useNavigate } from "react-router-dom"
import K from "../konstants"
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    const logout = async () => {
        try {
            await apiLogout();
            toast.success("Logged out successfully")
            navigate("/signin")
        } catch (error) {
            toast.error("An error occured")
        }
    }
    const { pathname } = useLocation()
    const paths = pathname.split("/")
    const currentPath = paths[2]

    return (
        <>
            <div className="flex flex-row justify-center gap-x-4 h-screen  border-r ml-3 text-primary font-semibold text-xl bg-slate-100">


                <div className=" flex flex-col mt-40 content-center ">
                    <div className="">
                    </div>
                    <div className=" flex flex-col justify-center items-center gap-y-3  w-[240px]">
                        {K.NAVLINKS.map(
                            (item, index) => {
                                return (
                                    <Link key={index} to={item.path}
                                        className={`flex text-center gap-x-2 w-full pl-5 py-2 hover:shadow-lg 
                        
                        ${currentPath == item.path && "bg-primary text-white rounded-l-[20px]"}`}>

                                        <span className="relative ">
                                            {item.Icon}
                                        </span>
                                        <span className="relative animate-fade-in ">{item.name}</span>
                                    </Link>)
                            }
                        )
                        }

                        <button
                            className="flex"
                            onClick={logout}
                        >
                            <span className="">
                                <LogOut />
                            </span>
                            <span>Logout</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar