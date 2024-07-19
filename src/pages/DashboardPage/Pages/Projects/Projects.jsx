import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'
import K from '../../../../konstants'
import { Edit, TrashIcon } from 'lucide-react' 


const Projects = () => {
    const navigate = useNavigate()
    return (
        <PagesLayout headerText="Projects" buttonText="Add Project" onClick={() =>navigate ("/dashboard/projects/add")}>
          <div className="grid grid-cols-1 gap-5 mt-5 bg-[#ecb2708e] ">
          {K.PROJECTS.map(({projectName, description, contributors, skills, link, nameOfInstitution, startDate, endDate}, index) =>
          <div
          key={index} 
          className="h-54 shadow-md rounded-xl flex flex-col p-5"
          >
            <div className="ml-auto flex gap-x-2 ">
              <span  className="bg-primary p-2 rounded-full text-white">
                <Edit/>
              </span>
              <span  className="bg-primary p-2 rounded-full text-white">
                <TrashIcon/>
              </span>
            </div>
            <span className="uppercase font-bold ">{projectName}</span>
            <span>{description}</span>
            <span>{contributors}</span>
            <span>{skills}</span>
            <span>{link}</span>
            <span>{nameOfInstitution}</span>
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
        )}
          </div>
        </PagesLayout>
      )
}

export default Projects