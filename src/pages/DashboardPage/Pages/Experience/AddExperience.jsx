import React from 'react';

const AddExperience = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="font-bold text-3xl mb-8 text-center">Add Experience</h1>
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={AddExperience} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="companyName"
                className="block font-bold mb-1"
              >
                Name of Company
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block font-bold mb-1"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="responsibility"
                className="block font-bold mb-1"
              >
                Responsibility
              </label>
              <input
                type="text"
                id="responsibility"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block font-bold mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="startDate"
                className="block font-bold mb-1"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label
                htmlFor="endDate"
                className="block font-bold mb-1"
              >
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                className="w-full h-10 px-2 py-1 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-primary text-white font-bold border-2 rounded-3xl hover:bg-secondary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
