import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Template from './components/layout/Template'
import Shop from './components/Shop'
import Home from './components/Home'
import AddToCart from './components/AddToCart'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Signup from './components/Signup'
import Login from './components/Login'
import Service from './components/Service'


function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Template/>,
      children:[
        {
          path: "/",
          element: <Home/>
        }
        ,{
          path: "/shop",
          element: <Shop/>
        }
        ,{
          path: "/addtocart",
          element: <AddToCart/>
        }
        ,{
          path: "/contact",
          element: <Contact/>
        }
        ,{
          path: "/aboutus",
          element: <AboutUs/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/services",
          element: <Service/>
        }
      ]
    }
  ])
  console.log(router)
  return(
    <RouterProvider router={router}/>
  )
}
export default App
