import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LockClosedIcon, UserIcon } from '@heroicons/react/outline';
import { signUpImg } from '../assets';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-primary via-yellow-400 to-orange-400 text-white">
      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center">
        <img src={signUpImg} alt="Sign Up" className="h-full w-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-primary text-secondary">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">First Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="lastName">Last Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="otherNames">Other Names</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="otherNames"
                placeholder="Other Names"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">Username</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm">
              I agree to the <Link to="/terms" className="text-white">Terms and Conditions</Link>
            </label>
          </div>
          <button type="submit" className="bg-secondary text-primary px-4 py-2 rounded-full w-full">
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/signin" className="text-secondary">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
