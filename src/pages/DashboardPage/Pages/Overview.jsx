import { ArrowRightCircleIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import {heroImg} from '../../../assets/index'
// Example icon from Heroicons


const Overview = () => {
  const sections = [
    { name: 'Education', count: 12, image: '/path-to-education-image.jpg' },
    { name: 'Skills', count: 30, image: '/path-to-skills-image.jpg' },
    { name: 'Experiences', count: 10, image: '/path-to-experiences-image.jpg' },
    { name: 'Projects', count: 5, image: '/path-to-projects-image.jpg' },
    { name: 'Achievements', count: 8, image: '/path-to-achievements-image.jpg' },
    { name: 'Volunteering', count: 4, image: '/path-to-volunteering-image.jpg' },
  ];

  return (
    <div className="min-h-screen bg-primary text-primay">
      {/* Hero Section */}
      <div className="relative">
        <img src={heroImg} alt="Hero" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white animate-fade-in  animate-bounce">Welcome to Your Dashboard</h1>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {sections.map((section, index) => (
          <Link to={`/${section.name.toLowerCase()}`} key={index} className="group">
            <div className={`bg-${index % 2 === 0 ? 'white' : 'secondary'} p-4 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105`}>
              <div className="relative mb-4">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-16 h-16">
                  <img src={section.image} alt={section.name} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="pt-8 text-center">
                <h2 className="text-xl font-semibold ">{section.name}</h2>
                <p className="text-lg">{section.count} {section.name}</p>
                <ArrowRightCircleIcon className="h-6 w-6 mx-auto mt-2 text-white group-hover:text-orange-600" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Overview;
