import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon, LockClosedIcon, UserIcon } from "@heroicons/react/outline";
import { signUpImg } from "../assets";
import { useForm } from "react-hook-form";
import { apiCheckUsernameExists, apiSignUp } from "../services/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { debounce } from "lodash";

const SignUp = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUserNameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const [isUsernameLoading, setIsUsernameLoading] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const checkUserName = async (userName) => {
    setIsUsernameLoading(true)

    try {
      const res = await apiCheckUsernameExists(userName)
      console.log(res.data)
      const user = res.data.user
      if (user) {
        setUsernameNotAvailable(true)
        setUserNameAvailable(false)
      } else {
        setUserNameAvailable(true)
        setUsernameNotAvailable(false)
      }
    } catch (error) {
      console.log(error)
      toast.error("An error occured")
    } finally {
      setIsUsernameLoading(false);
    }
  };


  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
       await checkUserName(userNameWatch)
      }
    }, 1000)

    debouncedSearch();

    return () => {
      debouncedSearch.cancel();
    }

  }, [userNameWatch])

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password,
      confirmedPassword: data.password,
      email: data.email,
    }
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames }
    }
    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data)
      setTimeout(() => {
        navigate("/signin")
      }, 5000)

    } catch (error) {
      console.log(error);
      toast.error("An error occured")
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-primary via-yellow-400 to-orange-400 text-white">
      <div className="hidden md:block md:w-1/2 bg-cover bg-center">
        <img
          src={signUpImg}
          alt="Sign Up"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 p-8 bg-primary text-secondary">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign Up with merjFOLIO
        </h1>

        <form
          className="w-full max-w-sm mx-auto text-primary"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label className="block mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                {
                // register is from the react hook form and you resgister it with the name of the field. If the input is not optional, use required element to specify that that field should be filled. you can add min/mas length
                ...register("firstName", {
                  required: "Your First Name is Required in this Field",
                  maxLength: 15,
                  minLength: 2,
                })
                }
              />
              {/*using 'logical and'(&&) to give  conditional error message */}
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                {...register("lastName", {
                  required: "Your Last Name is Required in this Field",
                  maxLength: 15,
                })}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="otherNames">
              Other Names
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="otherNames"
                placeholder="Other Names"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                {...register("otherNames")}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="name@gmail.com"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
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
            <label className="block mb-2" htmlFor="username">
              Username
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                {...register("userName", {
                  required: "Your Username is Required in this Field",
                  maxLength: 15,
                  minLength: 2,
                })}
              />
              {errors.userName && (
                <p className="text-red-500">{errors.userName.message}</p>
              )}
              <div className="flex items-center gap-x-2">
                {isUsernameLoading && <Loader />}
                {
                  usernameAvailable && <p className="text-green-500">Username is available</p>
                }
                {
                  usernameNotAvailable && <p className="text-red-500">Username is already taken</p>
                }
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                {...register("password", {
                  required: "Your Password is Required in this Field",
                  maxLength: 15,
                  minLength: 2,
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              {...register("terms", {
                required: "Please, Check this box",
              })}
            />
            {errors.terms && (
              <p className="text-red-500">{errors.terms.message}</p>
            )}
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-white">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="bg-secondary text-primary px-4 py-2 rounded-full w-full flex justify-center items-center"
          >
            {isSubmitting ? <Loader /> : "Create Account"}
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-secondary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
