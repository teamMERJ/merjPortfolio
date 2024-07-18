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

          <div>
            {
              skills.length == 0 ? <p>No skill added yet</p> : <div className="grid grid-cols-4 gap-6 mt-10">
                {skills.map(({ name, levelOfProficiency, id }, index) => (
                  <div
                    key={index}
                    className="h-40 shadow-md rounded-xl flex flex-col p-5">
                    <div className="ml-auto flex gap-x-2">
                      <button className="bg-primary p-2 rounded-full text-white">
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDelete(id)}
                        className="bg-primary p-2 rounded-full text-white flex justify-center items-center">
                        {
                          isDeleting ? <Loader /> : <TrashIcon />
                        }
                      </button>
                    </div>
                    <span>{name}</span>
                    <span>{levelOfProficiency}</span>
                  </div>
                )

                )}
              </div>
            }
          </div>
      }

    </PagesLayout>
  );
};

export default Skills