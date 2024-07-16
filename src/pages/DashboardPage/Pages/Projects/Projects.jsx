import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'


const Projects = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Projects'
                buttonText='Add New' onClick={()=> navigate("/dashboard/projects/add-project")}
                children='' />
            
            <span>Projects list here</span>

        </div>
    )
}

export default Projects