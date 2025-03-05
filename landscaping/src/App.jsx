import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Template from './components/layout/Template'
import Shop from './components/Shop'
import Home from './components/Home'
import AddToCart from './components/AddToCart'


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
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}
export default App
