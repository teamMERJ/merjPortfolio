// src/components/Overview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, PencilAltIcon } from '@heroicons/react/outline';

const Overview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-primary via-yellow-400 to-orange-400 text-white p-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Overview</h1>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="relative w-32 h-32 mb-4">
              <img src="path-to-profile-picture.jpg" alt="Profile" className="rounded-full object-cover w-full h-full" />
              <button className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full">
                <PencilAltIcon className="h-5 w-5 text-primary" />
              </button>
            </div>
            <h2 className="text-xl font-semibold">Username</h2>
          </div>
          <div className="w-full mb-4">
            <label className="block mb-2 text-lg">Bio</label>
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 text-primary"
              placeholder="Tell us about yourself..."
              rows="4"
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <Link to="/dashboard/edit-overview">
              <button className="bg-secondary text-primary px-4 py-2 rounded-full">
                Add More Information
              </button>
            </Link>
            <Link to="/dashboard/edit-overview">
              <button className="bg-secondary text-primary px-4 py-2 rounded-full">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
