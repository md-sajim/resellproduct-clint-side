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
import { Toaster } from 'react-hot-toast';
import Privaterouter from './route/Privaterouter/Privaterouter';
import Product from './pages/Products/Product';

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
        {
          path:'/produts/:id/:tast',
          // loader:(params)=>console.log(params.params.id),
          loader:(params)=>{
            console.log(params)
            return fetch(`http://localhost:5000/allproduct/${params.params.id}/${params.params.tast}`)
          },
          element:<Product></Product>
        }

      ]
    },
    {
      path: "/dashbore",
      element: <Privaterouter><DashLayOut></DashLayOut></Privaterouter>,
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
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
