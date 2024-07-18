import React from 'react'

const AddExperience = () => {
  return (
    <div className="min-h-screen bg-primary text-white p-8">
      <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Experience</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={experience.companyName}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={experience.role}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="block text-sm font-medium">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={experience.skills}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* Responsibility */}
          <div>
            <label htmlFor="responsibility" className="block text-sm font-medium">
              Responsibility
            </label>
            <textarea
              id="responsibility"
              name="responsibility"
              value={experience.responsibility}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              rows="4"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={experience.location}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              required
            />
          </div>

          {/* Button Group */}
          <div className="flex justify-between mt-6 space-x-4">
            <button
              type="submit"
              className="w-1/2 py-2 px-4 bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-lg"
            >
              Add Experience
            </button>
            <button
              type="button"
              onClick={() => navigate('/experiences')}
              className="w-1/2 py-2 px-4 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddExperience