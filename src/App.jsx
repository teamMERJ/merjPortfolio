import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/Landing"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Preview from "./pages/Preview"
import DashboardLayout from "./pages/DashboardPage/layouts"
import Overview from "./pages/DashboardPage/Pages/Overview"
import Skills from "./pages/DashboardPage/Pages/Skills"
import Projects from "./pages/DashboardPage/Pages/projects"
import Experiences from "./pages/DashboardPage/Pages/experiences"
import Education from "./pages/DashboardPage/Pages/education"
import Achivements from "./pages/DashboardPage/Pages/Achivements"
import Socials from "./pages/DashboardPage/Pages/Socials"
import SignUpPage from "./pages/SignUp"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "preview",
      element: <Preview />,
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />
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
          path: "skills",
          element: <Skills />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "experiences",
          element: <Experiences />
        },
        {
          path: "educaion",
          element: <Education />
        },
        {
          path: "achievements",
          element: <Achivements />
        },
        {
          path: "socials",
          element: <Socials />
        }
      ],
    },
    
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App