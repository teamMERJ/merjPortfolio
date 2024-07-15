import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { apiLogin } from "../services/auth";

const SignIn = () => {
  // let  isSubmitting = false
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate()
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)

    try {
      const res = await apiLogin({
        email: data.email,
        // userName: data.username,
        password: data.password,
      });
      console.log("Response:", res.data);
      console.log("Second: I got called");
      // redirect user to dashboard
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary via-yellow-400 to-primary">
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-primary mb-2" htmlFor="email">
              Email ID
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Email ID"
                {...register("email", {
                  required: "Your Email is Required in this Field",
                  minLength: 2,
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-primary mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                placeholder="Password"
                {...register("password", {
                  required: "Password is Required in this Field",
                  maxLength: 15,
                  minLength: 2,
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-primary hover:text-secondary-light"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-secondary hover:bg-secondary-dark text-primary font-semibold rounded-lg"
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-white">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
