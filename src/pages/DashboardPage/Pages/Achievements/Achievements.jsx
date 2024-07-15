import React from 'react'
import PagesLayout from '../layouts/PagesLayout'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../../components/NavBar'

const Achievements = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar/>
            <PagesLayout headerText='Achievements'
                buttonText='Add New' onClick={()=> navigate("/dashboard/achievements/add-achievement")}
                children='' />
            
            <span>Achievements list here</span>

        </div>
    )
}

export default Achievements