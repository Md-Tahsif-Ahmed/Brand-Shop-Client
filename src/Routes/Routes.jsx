import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddProduct from "../components/Product/AddProduct";
import ShowProduct from "../components/Product/ShowProduct";
import UpdateProduct from "../components/Product/UpdateProduct";
import EachDetails from "../components/Product/EachDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/addproduct',  
        element: <AddProduct />,
      },
      {
        path: '/show',  
        element: <ShowProduct />,
        loader: () => fetch('http://localhost:7000/products/'),
      },
      {
        path: '/details/:id', 
        element: <EachDetails/>,
        loader: ()=> fetch('http://localhost:7000/products/'),
      },
      {
        path: '/update/:id', 
        element: <UpdateProduct />,
        // loader: ({params}) => fetch(`http://localhost:7000/products/${params.id}`),
        loader: ()=> fetch('http://localhost:7000/products/'),
      },
    ],
  },
]);

export default router;
