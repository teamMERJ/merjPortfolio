import { Link } from 'react-router-dom';
import Overview from '../pages/DashboardPage/Pages/Overview';
import Skills from '../pages/DashboardPage/Pages/Skills';
import Experiences from '../pages/DashboardPage/Pages/experiences';
import Education from '../pages/DashboardPage/Pages/education';
import Achivements from '../pages/DashboardPage/Pages/Achivements';
import Projects from '../pages/DashboardPage/Pages/projects';
import { Home } from 'lucide-react';
const Sidebar = () => {
  return (
    <div className="h-screen shadow-2xl w-[250px] text-secondary flex flex-col bg-primary">
      <span className="text-2xl ">merjPorfolio</span>

      <nav className="flex flex-col space-y-2 p-4">
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Overview /></span>
        </Link>
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Skills /></span>
        </Link>
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Experiences /></span>
        </Link>
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Education /></span>
        </Link>
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Achivements /></span>
        </Link>
        <Link className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
        <Home className="w-6 h-6" />
        <span><Projects /></span>
        </Link>
        
    </nav>
    </div>
  )
}

export default Sidebar