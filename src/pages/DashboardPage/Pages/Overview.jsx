import { ArrowRightCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroImg } from '../../../assets/index'
import { apiGetSKills } from '../../../services/skills';
import { apiGetAchievements } from '../../../services/achievements';
import { apiGetProjects } from '../../../services/projects';
import { apiGetVolunteering } from '../../../services/volunteering';
import { apiGetEducation } from '../../../services/education';
import { apiGetExperiences } from '../../../services/experiences';
import PageLoader from '../../../components/PageLoader';
// Example icon from Heroicons


const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  })

  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const [totalSkills, totalAchievements, totalProjects, totalVolunteering, totalEducation, totalExperiences] = await Promise.all([
        apiGetSKills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperiences(),
      ])

      console.log("Total skills: ", totalSkills)

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        education: totalEducation.length,
        experiences: totalExperiences.length,
      }

      console.log(newData)

      setData(newData)

    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const sections = [
    { name: 'Education', count: 12, image: '/path-to-education-image.jpg' },
    { name: 'Skills', count: 30, image: '/path-to-skills-image.jpg' },
    { name: 'Experiences', count: 10, image: '/path-to-experiences-image.jpg' },
    { name: 'Projects', count: 5, image: '/path-to-projects-image.jpg' },
    { name: 'Achievements', count: 8, image: '/path-to-achievements-image.jpg' },
    { name: 'Volunteering', count: 4, image: '/path-to-volunteering-image.jpg' },
  ];

  return (
    <>
    {
      isLoading ? (
        <PageLoader/>
      ) : (
        <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative">
        <img src={heroImg} alt="Hero" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in">Welcome to Your Dashboard</h1>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-40 py-10">
        {sections.map((section, index) => (
          <Link to={`/${section.name.toLowerCase()}`} key={index} className="group">
            <div className="bg-[#ecb2708e] p-6 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              
              <div className="pt-2 text-center">
                <h2 className="text-xl font-semibold">{section.name}</h2>
                <p className="text-lg text-black">{section.count} {section.name}</p>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
      )
        
    }
    </>
  );
};

export default Overview;
