import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PublicTemplate from './layout/PublicTemplate'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicTemplate/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
