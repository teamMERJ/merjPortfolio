import React from 'react';
import { MailIcon, PhoneIcon, DownloadIcon, GlobeIcon, UserCircleIcon } from '@heroicons/react/outline'; // Example icons from Heroicons

const Profile = () => {
  return (
    <div className="min-h-screen bg-primary text-white p-16">
      <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-6">
          <img src="/path-to-profile-picture.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg flex items-center"><GlobeIcon className="h-5 w-5 mr-2" /> Location: New York, USA</p>
            <p className="text-lg flex items-center"><UserCircleIcon className="h-5 w-5 mr-2" /> Marital Status: Single</p>
            <p className="text-lg flex items-center"><UserCircleIcon className="h-5 w-5 mr-2" /> Sex: Male</p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Bio</h2>
          <p className="mt-2">A brief bio about the user...</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-2">Detailed information about the user...</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2 flex items-center"><MailIcon className="h-5 w-5 mr-2" /> Email: john.doe@example.com</p>
          <p className="mt-2 flex items-center"><PhoneIcon className="h-5 w-5 mr-2" /> Phone: +123 456 7890</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Languages</h2>
          <ul className="mt-2">
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">CV</h2>
          <a href="/path-to-cv.pdf" className="text-blue-500 flex items-center"><DownloadIcon className="h-5 w-5 mr-2" /> Download CV</a>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Social Links</h2>
          <p className="mt-2"><a href="https://github.com/username" className="text-blue-500 underline">GitHub</a></p>
          <p className="mt-2"><a href="https://linkedin.com/in/username" className="text-blue-500 underline">LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
