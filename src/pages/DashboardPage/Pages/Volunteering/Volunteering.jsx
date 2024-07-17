import { useNavigate } from 'react-router-dom'
import PagesLayout from '../../layouts/PagesLayout'


const Volunteering = () => {
    const navigate = useNavigate()
    return (
        <div>
          
            <PagesLayout headerText='Volunteering'
                buttonText='Add New' onClick={()=> navigate("/dashboard/volunteering/add-volunteering")}
                children='' />
            
            <span>Volunteering list here</span>

        </div>
    )
}

export default Volunteering