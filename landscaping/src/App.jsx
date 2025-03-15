import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./components/layout/Template";
import Shop from "./components/Shop";
import AddToCart from "./components/AddToCart";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Service from "./components/Service";
import Privateroute from "./components/layout/Privateroute"; // Dynamic Home Page
import AboutUs from "./components/AboutUs";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Privateroute />, // Dynamic rendering of Home / Secure Home
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/addtocart",
        element: <AddToCart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/signup",
        element: <Signup/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
