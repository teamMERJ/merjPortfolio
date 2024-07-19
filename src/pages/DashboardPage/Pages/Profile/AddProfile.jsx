import React from 'react';
import { CameraIcon, DownloadIcon, GlobeIcon, MailIcon, PhoneIcon, UserIcon } from '@heroicons/react/outline';

const AddProfile = () => {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Create New Profile</h1>

        <form className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                <CameraIcon className="h-12 w-12 text-gray-500" />
              </div>
              <input type="file" id="profilePicUpload" className="hidden" />
              <label htmlFor="profilePicUpload" className="absolute bottom-0 right-0 p-2 bg-secondary rounded-full cursor-pointer">
                <CameraIcon className="h-5 w-5 text-white" />
              </label>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {/* First Name(s) */}
            <div className="relative">
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name(s)
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name(s)"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* Other Name(s) */}
            <div className="relative">
              <label htmlFor="otherNames" className="block text-sm font-medium">
                Other Name(s)
              </label>
              <input
                type="text"
                id="otherNames"
                placeholder="Other Name(s)"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* Username */}
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-medium">
                Preferred Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Preferred Username"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* Location */}
            <div className="relative">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Location"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* Contact */}
            <div className="relative">
              <label htmlFor="contact" className="block text-sm font-medium">
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                placeholder="Contact"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* Marital Status */}
            <div className="relative">
              <label htmlFor="maritalStatus" className="block text-sm font-medium">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              >
                <option value="" disabled selected>
                  Select Marital Status
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            {/* Sex */}
            <div className="relative">
              <label htmlFor="sex" className="block text-sm font-medium">
                Sex
              </label>
              <select
                id="sex"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              >
                <option value="" disabled selected>
                  Select Sex
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Languages */}
            <div className="relative">
              <label htmlFor="languages" className="block text-sm font-medium">
                Languages
              </label>
              <input
                type="text"
                id="languages"
                placeholder="Languages"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>

            {/* CV Upload */}
            <div className="relative">
              <label htmlFor="cvUpload" className="block text-sm font-medium">
                CV Upload
              </label>
              <input
                type="file"
                id="cvUpload"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              
            </div>

            {/* GitHub Link */}
            <div className="relative">
              <label htmlFor="gitHubLink" className="block text-sm font-medium">
                GitHub Link
              </label>
              <input
                type="url"
                id="gitHubLink"
                placeholder="GitHub Link"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            {/* LinkedIn Link */}
            <div className="relative">
              <label htmlFor="linkedInLink" className="block text-sm font-medium">
                LinkedIn Link
              </label>
              <input
                type="url"
                id="linkedInLink"
                placeholder="LinkedIn Link"
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
          </div>

          {/* Button Group */}
          <div className="flex justify-between mt-6 space-x-4">
            {/* Create Profile Button */}
            <button type="submit" className="w-1/2 py-2 px-4 bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-lg">
              Create Profile
            </button>
            
            {/* Back to Profile Page Button */}
            <button className="w-1/2 py-2 px-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg">
              Back to Profile Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProfile;
