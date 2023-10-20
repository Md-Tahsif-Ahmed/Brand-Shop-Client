import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddProduct from "../components/Product/AddProduct";
  
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
        }
      ]
    },
  ]);

export default router;