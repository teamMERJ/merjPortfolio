import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'


const Skills = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Skills'
                buttonText='Add New' onClick={()=> navigate("/dashboard/skills/add-skill")}
                children='' />
            
            <span>Skills list here</span>

        </div>
    )
}

export default Skills