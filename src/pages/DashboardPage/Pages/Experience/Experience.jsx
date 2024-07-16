import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'


const Experience = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Experience'
                buttonText='Add New' onClick={()=> navigate("/dashboard/experience/add-experience")}
                children='' />
            
            <span>Experience list here</span>

        </div>
    )
}

export default Experience