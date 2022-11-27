import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login&Reagister/Login';
import Reagister from './pages/Login&Reagister/Reagister';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        }
      ]
    },  
    {
      path:"*",
      element:<NotFound></NotFound>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Reagister></Reagister>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
