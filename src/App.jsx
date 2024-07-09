import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from "./pages/Landing"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Preview from "./pages/Preview"

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
      path: "dsashboard",
      element: <Dashboard />
    }
  ])
  return (
   <RouterProvider router={router} />
  )
}

export default App