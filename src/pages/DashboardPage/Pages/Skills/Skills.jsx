import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../../layouts/PagesLayout";
import K from "../../../../konstants";
import { Edit, TrashIcon } from "lucide-react";
import { apiDeleteSkill, apiGetSKills } from "../../../../services/skills";
import PageLoader from "../../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader";

const Skills = () => {
  const navigate = useNavigate()
  const [skills, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fetchSkills = async () => {
    setIsLoading(true)
    try {
      const res = await apiGetSKills()
      console.log(res.data)
      setSkills(res.data.Skills)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (_id) => {
    try {
      console.log(_id)
      const res = await apiDeleteSkill(_id)
      console.log(res.data)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    }
  }

  useEffect(() => {
    fetchSkills()
  }, [])
  return (
    <PagesLayout headerText="Skills" buttonText="Add New skill" onClick={() => navigate("/dashboard/skills/add")} >
      {
        isLoading ? <PageLoader /> :

        <div className="mt-6">
        {skills.length === 0 ? (
          <p className="text-center text-gray-500">No skills added yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {skills.map(({ name, levelOfProficiency, id }, index) => (
              <div key={index} className="bg-white h-40 shadow-md rounded-xl flex flex-col p-5 relative hover:shadow-lg transition-shadow duration-300 bg-[#ecb2708e]">
                <div className="absolute top-2 right-2 flex gap-x-2">
                  <button className="bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-colors duration-300">
                    <Edit />
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-colors duration-300 flex justify-center items-center"
                  >
                    {isDeleting ? <Loader /> : <TrashIcon />}
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-lg font-semibold">{name}</span>
                  <span className="text-sm text-gray-500">{levelOfProficiency}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      }

    </PagesLayout>
  );
};

export default Skills