import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddSkill from "./pages/DashboardPage/Pages/Skills/AddSkill"
import AddProject from "./pages/DashboardPage/Pages/Projects/AddProject"
import AddExperience from "./pages/DashboardPage/Pages/Experience/AddExperience"
import AddEducation from "./pages/DashboardPage/Pages/Education/AddEducation"
import AddAchievement from "./pages/DashboardPage/Pages/Achievements/AddAchievements"
import AddVolunteering from "./pages/DashboardPage/Pages/Volunteering/AddVolunteering"
import AddProfile from "./pages/DashboardPage/Pages/Profile/AddProfile"
import DashboardLayout from "./pages/DashboardPage/layouts"
import Overview from "./pages/DashboardPage/Pages/Overview"
import Skills from "./pages/DashboardPage/Pages/Skills/Skills"
import Landing from "./pages/Landing"
import Preview from "./pages/Preview"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Projects from "./pages/DashboardPage/Pages/Projects/Projects"
import Experience from "./pages/DashboardPage/Pages/Experience/Experience"
import Education from "./pages/DashboardPage/Pages/Education/Education"
import Profile from "./pages/DashboardPage/Pages/Profile/Profile"
import Achievements from "./pages/DashboardPage/Pages/Achievements/Achievements"
import Volunteering from "./pages/DashboardPage/Pages/Volunteering/Volunteering"
import AuthLayout from "./pages/AuthLayout"
import { apiGetUserDetails } from "./services/preview"
import { toast } from "react-toastify"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "profile/add",
          element: <AddProfile />
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "skills/add",
          element: <AddSkill />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "project/add",
          element: <AddProject/>
        },
        {
          path: "experience",
          element: <Experience />
        },
        {
          path: "experience/add",
          element: <AddExperience />
        },
        {
          path: "education",
          element: <Education />
        },
        {
          path: "education/add",
          element: <AddEducation />
        },
        {
          path: "achievements",
          element: <Achievements />
        },
        {
          path: "achievement/add",
          element: <AddAchievement />
        },
        {
          path: "voluntering",
          element: <Volunteering />
        },
        {
          path: "voluntering/add",
          element: <AddVolunteering />
        },
        {
          
        }
      ],
    },
    {
      path: "preview",
      element: <Preview />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occured");
          return null;
        }
      }
    },
    
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App