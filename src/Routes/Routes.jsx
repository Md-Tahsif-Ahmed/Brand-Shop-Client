import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddProduct from "../components/Product/AddProduct";
import ShowProduct from "../components/Product/ShowProduct";
  
const router = createBrowserRouter([
    {
      path: "/",
      element:  <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/addproduct',
          element: <AddProduct></AddProduct>,
        },
        {
          path: '/show',
          element: <ShowProduct></ShowProduct>,
          loader: () => fetch('http://localhost:7000/products/'),
        }

      ]
    },
  ]);

export default router;