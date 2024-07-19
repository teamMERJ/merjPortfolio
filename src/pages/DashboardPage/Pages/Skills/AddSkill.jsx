import { useForm } from "react-hook-form";
import { apiAddSkill } from "../../../../services/skills";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../../components/Loader";

const AddSkills = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
      });
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Add Skill</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block  font-bold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              id="name"
              placeholder="Enter the name of your skill"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9C60]"
            />
            {errors.name && (
              <p className=" text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="proficiency"
              className="block  font-bold mb-1"
            >
              Level Of Proficiency
            </label>
            <select
              id="proficiency"
              {...register("proficiency", {
                required: "proficiency is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9C60]"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
            {errors.proficiency && (
              <p className=" text-sm mt-1">
                {errors.proficiency.message}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="h-10 w-40 px-3 py-2 bg-black text-white border-2 rounded-3xl hover:bg-[#e7d7e9] flex items-center justify-center"
            >
              {isSubmitting ? <Loader /> : "Add Skill"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkills;
