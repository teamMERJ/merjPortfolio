import { useNavigate } from "react-router-dom";
import PagesLayout from "../../layouts/PagesLayout";
import K from "../../../../konstants";
import { Edit, TrashIcon } from "lucide-react";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Experience"
      buttonText="Add new Experience"
      onClick={() => navigate("/dashboard/experience/add")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {K.EXPERIENCES.map(({companyName, location, role, skills, responsibility, startDate, endDate }, index) => (
          <div
            key={index}
            className="shadow-md rounded-xl p-5 text-black flex flex-col justify-between bg-[#ecb2708e]"
          >
            <div className="flex justify-between items-center ">
              <span className="uppercase font-bold">{companyName}</span>
              <div className="flex gap-2">
                <button className="bg-primary p-2 rounded-full text-white">
                  <Edit size={16} />
                </button>
                <button className="bg-primary p-2 rounded-full text-white">
                  <TrashIcon size={16} />
                </button>
              </div>
            </div>
            <div className="mt-2">
              <span className="block ">{companyName}</span>
              <span className="block ">{location}</span>
              <span className="block mt-1">{role}</span>
              <span className="block mt-1">{skills}</span>
              <span className="block mt-1">{responsibility}</span>
              <span className="block mt-1">{startDate}</span>
              <span className="block mt-1">{endDate}</span>
            </div>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Experience;