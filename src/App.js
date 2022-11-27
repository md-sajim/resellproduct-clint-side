import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login&Reagister/Login';
import Reagister from './pages/Login&Reagister/Reagister';
import Deshbord from './pages/Deshbord/Deshbord';
import DashLayOut from './LayOut/DashLayOut';

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
          path: "/dashbore",
          element: <Deshbord></Deshbord>
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
