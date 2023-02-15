import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login&Reagister/Login';
import Reagister from './pages/Login&Reagister/Reagister';
import DashLayOut from './LayOut/DashLayOut';
import MyProduct from './pages/Deshbord/Sellers/MyProduct/MyProduct';
import MyBuyers from './pages/Deshbord/Sellers/MyBuyers/MyBuyers';
import AddProduct from './pages/Deshbord/Sellers/AddProduct/AddProduct';
import { Toaster } from 'react-hot-toast';
import Privaterouter from './route/Privaterouter/Privaterouter';
import Product from './pages/Products/Product';
import AllBuyer from './pages/Deshbord/Admin/AllBuyers/AllBuyer';
import AllSellers from './pages/Deshbord/Admin/AllSellers/AllSellers';
import Blog from './pages/Blog/Blog';
import Explore from './pages/Home_2/Home_2/Explor';

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
          path:"/explor",
          element:<Explore></Explore>
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
          path: '/produts/:id/:tast',
          loader: (params) => {
            return fetch(`https://resell-product-server-nu.vercel.app/allproduct/${params.params.id}/${params.params.tast}`)
          },
          element: <Product></Product>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
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
        },
        {
          path: "/dashbore/allbuyer",
          element: <AllBuyer></AllBuyer>
        },
        {
          path: "/dashbore/allseller",
          element: <AllSellers></AllSellers>
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
