import Auth from "@/pages/Auth"
import Dashboard from "@/pages/Dashboard"
import ForgetPassword from "@/pages/ForgetPassword"
import Home from "@/pages/Home"
import LandingPage from "@/pages/LandingPage"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import ConfirmAccount from "@/pages/ConfirmAccount"
import ResetPassword from "@/pages/ResetPassword"
import Medications from "@/pages/Medications"
import Health from "@/pages/Health"
import Race from "@/pages/Race"

export default function RoutesIndex() {

  const router = createBrowserRouter([
    {
      index:true,
      element: <LandingPage/>,
    },
    {
      path:'auth',
      element:<Auth/>,
      children:[
        {
          index:true,
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'forget',
          element: <ForgetPassword/>
        },
        {
          path:'confirm',
          element:<ConfirmAccount/>
        },

        {
          path:'reset',
          element: <ResetPassword/>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard/>,
      children:[
        {
          index:true,
          element: <Navigate to={'home'}/>
        },
        {
          path:'home',
          element: <Home/>
        },
        {
          path:'medications',
          element: <Medications/>
        },
        {
          path:'health',
          element:<Health/>
        },
        {
          path:'race',
          element:<Race/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
