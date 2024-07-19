import React from 'react';

const AddEducation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8">
      <h1 className="font-bold text-3xl mb-8 mt-10">Add Education</h1>
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8">
        <form onSubmit={AddEducation} className="space-y-4">
          <div>
            <label htmlFor="institutionName" className="block text-black font-bold mb-1">
              Name of Institution
            </label>
            <input
              type="text"
              id="institutionName"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-black font-bold mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-black font-bold mb-1">
              Program
            </label>
            <input
              type="text"
              id="program"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="qualification" className="block text-black font-bold mb-1">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="startDate" className="block text-black font-bold mb-1">
              Start Date
            </label>
            <input
              type="text"
              id="startDate"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-black font-bold mb-1">
              End Date
            </label>
            <input
              type="text"
              id="endDate"
              className="h-10 w-full px-2 py-1 border-2 border-black rounded-lg"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 h-10 w-40 px-3 py-2 bg-black text-white border-2 rounded-3xl hover:bg-[#e7d7e9] transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
