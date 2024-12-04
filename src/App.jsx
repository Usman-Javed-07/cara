import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layouts/AppLayout"
import { ErrorPage } from "./pages/ErrorPage"
import Home  from "./pages/Home"
import  About  from "./pages/Abouts.jsx"
import  Blog from "./pages/Blogs.jsx"
import Contact  from "./pages/Contact"
import "./index.css"

import Shop  from "./pages/Shop"
import Cart from "./pages/Cart.jsx"
const router = createBrowserRouter ([
  {
    path: '/',
    errorElement : <ErrorPage/> ,
    element: <Layout/>,
    children : [
      {
        path : '/',
        element: <Home/>
      },
      {
        path : "Shop",
        element: <Shop/>
      },
      {
        path : "Blog",
        element: <Blog/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      },
      {
        path: "Cart",
        element: <Cart/>
      }
    ]
  }
])
export const App = () => {

  return  <RouterProvider router={router}></RouterProvider>
}

export default App