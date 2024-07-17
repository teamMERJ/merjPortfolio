import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  GlobeIcon,
  UserCircleIcon,
  PencilIcon,
  TrashIcon,
  CameraIcon,
  PlusIcon,
} from "@heroicons/react/outline"; // Example icons from Heroicons

const Profile = () => {
const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-primary text-white p-8">
      <div className="max-w-4xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Profile Details</h1>
          <Link
            to="/dashboard/profile/add"
            className="flex items-center justify-center bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-full h-12 w-12"
          >

              <PlusIcon className="h-6 w-6" />
            
          </Link>
        </div>
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src="/path-to-profile-picture.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-secondary"
            />
            <input type="file" id="profilePicUpload" className="hidden" />
            <label
              htmlFor="profilePicUpload"
              className="absolute bottom-0 right-0 p-2 bg-secondary rounded-full cursor-pointer"
            >
              <CameraIcon className="h-5 w-5 text-white" />
            </label>
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Elton Asamoah-Mantey</h1>
            <p className="text-lg flex items-center mt-2">
              <GlobeIcon className="h-5 w-5 mr-2" /> Location: Madina, Accra
            </p>
            <p className="text-lg flex items-center mt-2">
              <UserCircleIcon className="h-5 w-5 mr-2" /> Marital Status:
              Married
            </p>
            <p className="text-lg flex items-center mt-2">
              <UserCircleIcon className="h-5 w-5 mr-2" /> Sex: Male
            </p>
            <button className="mt-4 text-blue-500 hover:text-blue-700">
              <PencilIcon className="h-5 w-5" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <PencilIcon className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Bio</h2>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-black resize-none"
            defaultValue="A brief bio about the user..."
            rows="4"
          />
        </div>

        {/* About Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <PencilIcon className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">About</h2>
          <textarea
            className="w-full mt-2 p-2 border rounded-lg bg-gray-200 text-black resize-none"
            defaultValue="Detailed information about the user..."
            rows="4"
          />
        </div>

        {/* Contact Information Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded-lg relative">
          <div className="absolute top-2 right-2 flex space-x-2">
            <button className="text-blue-500 hover:text-blue-700">
              <PencilIcon className="h-5 w-5" />
            </button>
            <button className="text-red-500 hover:text-red-700">
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2 flex items-center">
            <MailIcon className="h-5 w-5 mr-2" /> Email:{" "}
            <input
              type="email"
              className="bg-gray-200 p-1 rounded-md text-black"
              defaultValue="eltonam.29@gmail.com"
            />
          </p>
          <p className="mt-2 flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2" /> Phone:{" "}
            <input
              type="tel"
              className="bg-gray-200 p-1 rounded-md text-black"
              defaultValue="+233 456 7580"
            />
          </p>
        </div>

        {/* Languages Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold">Languages</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                <input
                  type="text"
                  className="bg-gray-200 p-1 rounded-md text-black"
                  defaultValue="English"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="bg-gray-200 p-1 rounded-md text-black"
                  defaultValue="French"
                />
              </li>
            </ul>
          </div>

          {/* CV Section */}
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold">CV</h2>
            <a
              href="/path-to-cv.pdf"
              className="text-blue-500 flex items-center mt-2"
            >
              <DownloadIcon className="h-5 w-5 mr-2" />{" "}
              <input
                type="text"
                className="bg-gray-200 p-1 rounded-md text-black"
                defaultValue="Download CV"
              />
            </a>
          </div>

          {/* Social Links Section */}
          <div className="col-span-2 bg-gray-100 p-4 rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <PencilIcon className="h-5 w-5" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-2xl font-bold">Social Links</h2>
            <p className="mt-2">
              <a
                href="https://github.com/username"
                className="text-blue-500 underline"
              >
                <input
                  type="text"
                  className="bg-gray-200 p-1 rounded-md text-black"
                  defaultValue="GitHub"
                />
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://linkedin.com/in/username"
                className="text-blue-500 underline"
              >
                <input
                  type="text"
                  className="bg-gray-200 p-1 rounded-md text-black"
                  defaultValue="LinkedIn"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
