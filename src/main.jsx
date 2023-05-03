import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layouts/Main/Main.jsx'
import Home from './Layouts/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import ErrorPage from './Components/Error/ErrorPage'
import LoginLayout from './Layouts/LoginAndRegister/LoginLayout'
import Blog from './Components/Blogs/Blog'
import AuthProvider from './AuthProvider/AuthProvider'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/resetPassword',
        element: <ForgetPassword></ForgetPassword>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
