import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'
import {
    BriefcaseIcon,
    PencilIcon,
    TrashIcon,
    PlusIcon,
  } from "@heroicons/react/outline";

const Experience = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Experience'
                buttonText='Add New' onClick={()=> navigate("/dashboard/experience/add-experience")}
                children='' />
            
            <div className="space-y-6">
          {/* Experience Item */}
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold">Company Name</h2>
            <p className="text-lg">Role: Software Engineer</p>
            <p className="text-lg">Location: Accra, Ghana</p>
            <p className="text-lg">Start Date: January 2022</p>
            <p className="text-lg">End Date: Present</p>
            <h3 className="text-xl font-semibold mt-4">Skills</h3>
            <ul className="list-disc pl-5">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Responsibilities</h3>
            <p className="text-lg">Developed and maintained web applications using React and Node.js.</p>
          </div>

          {/* Add more experiences as needed */}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="py-2 px-4 bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
   
    )
}

export default Experience