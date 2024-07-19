import { useNavigate } from 'react-router-dom';
import PagesLayout from '../../layouts/PagesLayout';
import K from '../../../../konstants';
import { Edit, TrashIcon } from 'lucide-react';

const Education = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout headerText="Education" buttonText="Add new" onClick={() => navigate("/dashboard/education/add")}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {K.EDUCATION.map(({ schoolName, program, qualification, startDate, endDate }, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl flex flex-col p-5 space-y-2 hover:shadow-lg transition-shadow bg-[#ecb2708e]"
          >
            <div className="ml-auto flex gap-2">
              <button className="bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-colors">
                <Edit className="h-5 w-5" />
              </button>
              <button className="bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-colors">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <span className="uppercase font-bold">{schoolName}</span>
            <span className="font-bold text-gray-700">{program}</span>
            <span className="text-gray-600">{qualification}</span>
            <span className="text-gray-500">{startDate}</span>
            <span className="text-gray-500">{endDate}</span>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Education;
