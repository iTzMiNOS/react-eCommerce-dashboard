import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Navbar from './Layout/Navbar/Navbar'
import Menu from './Layout/Menu/Menu'
import Footer from './Layout/Footer/Footer'
import Login from './Pages/Login/Login'
import 'react-notifications/lib/notifications.css';
import './Components/Table/mirage'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Integrations from './Pages/Integrations/Integrations'
import SingleProd from './Pages/SingleProd/SingleProd'
import SingleIntegration from './Pages/SingleIntegration/SingleIntegration'
import Customers from './Pages/Customers/Customers'
import SingleCustomer from './Pages/SingleCustomer/SingleCustomer'
import Profile from './Pages/Profile/Profile'

function App() {

  const Layout = ()=> {
    return (
      <div className="main overflow-x-hidden bg-[color:var(--main-bg)] font-[Inter] text-[color:var(--main-text)]">
        <Navbar />
        <div className="container flex">
          <div className="menu--container xl:w-[250px] lg:w-max md:w-max sm:w-max py-[5px] px-[20px] border-r-2 border-solid border-[color:var(--soft-bg)]">
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
          path:"/customers",
          element:<Customers />
        },
        {
          path:"/products",
          element:<Products />
        },
        {
          path:"/integrations",
          element:<Integrations />
        },
        {
          path:"/profiles",
          element:<Profile />
        },
        {
          path:"/customers/:id",
          element:<SingleCustomer />
        },
        {
          path:"/products/:id",
          element:<SingleProd />
        },
        {
          path:"/integrations/:id",
          element:<SingleIntegration />
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
