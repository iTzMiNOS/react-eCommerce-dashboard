import './App.css'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import Products from './Pages/Products/Products'
import Navbar from './Layout/Navbar/Navbar'
import Menu from './Layout/Menu/Menu'
import Footer from './Layout/Footer/Footer'
import Login from './Pages/Login/Login'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = ()=> {
    return (
      <div className="main bg-[color:var(--main-bg)] font-[Inter] text-[color:var(--main-text)]">
        <Navbar />
        <div className="container flex">
          <div className="menu--container w-[250px] py-[5px] px-[20px] border-r-2 border-solid border-[color:var(--soft-bg)]">
            <Menu />
          </div>
          <div className="content--container w-[100%] py-[5px] px-[20px]">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/products",
          element:<Products />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
