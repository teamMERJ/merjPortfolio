import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'


const Education = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Education'
                buttonText='Add New' onClick={()=> navigate("/dashboard/education/add-education")}
                children='' />
            
            <span>Education list here</span>

        </div>
    )
}

export default Education