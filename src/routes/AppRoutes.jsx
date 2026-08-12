import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../app/layout/MainLayout'
import Hero from '../sections/Hero'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:"",
            element: <MainLayout/>,
            children:[
                {
                    path:"",
                    element:<Hero/>
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRoutes