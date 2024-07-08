import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import BasicLayout from '../layouts/BasicLayout'
import Error404 from '../pages/errors/Error404'
import Login from '../pages/auth/login'
import Index from '../pages/index'

export default createBrowserRouter([
  {
    path: '',
    element: <AuthLayout />,
    children: [{path: '/login', element: <Login />}],
    errorElement: <Error404 />
  },
  {
    path: '/',
    element: <BasicLayout />,
    children: [{index: true, element: <Index />}],
    errorElement: <Error404 />
  }
])
