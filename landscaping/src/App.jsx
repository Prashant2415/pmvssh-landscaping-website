import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Template from './components/layout/Template'
import Shop from './components/Shop'
import Home from './components/Home'
import AddToCart from './components/AddToCart'
import Contact from './components/Contact'


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
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}
export default App
