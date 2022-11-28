import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login&Reagister/Login';
import Reagister from './pages/Login&Reagister/Reagister';
import Deshbord from './pages/Deshbord/Deshbord';
import DashLayOut from './LayOut/DashLayOut';
import MyProduct from './pages/Deshbord/Sellers/MyProduct/MyProduct';
import MyBuyers from './pages/Deshbord/Sellers/MyBuyers/MyBuyers';
import AddProduct from './pages/Deshbord/Sellers/AddProduct/AddProduct';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Reagister></Reagister>
        },

      ]
    },
    {
      path: "/dashbore",
      element: <DashLayOut></DashLayOut>,
      children: [
      
        {
          path: "/dashbore/myproduct",
          element: <MyProduct></MyProduct>
        },
        {
          path: "/dashbore/mybuyers",
          element: <MyBuyers></MyBuyers>
        },
        {
          path: "/dashbore/addproduct",
          element: <AddProduct></AddProduct>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
