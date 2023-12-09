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
import PrivateRoutes from "./PrivateRoutes";
import MyCart from "../components/Cart/MyCart";
import DeleteProduct from "../components/Cart/DeleteProduct";

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
        element: <PrivateRoutes><AddProduct /></PrivateRoutes>,
      },
      {
        path: '/show/:title',  
        element: <ShowProduct />,
        loader: () => fetch('https://brand-shop-new-server-n07wv1tuz-tahsif1010s-projects.vercel.app/products/'),
      },
      {
        path: '/details/:id', 
        element: <PrivateRoutes><EachDetails/></PrivateRoutes>,
        loader: ()=> fetch('https://brand-shop-new-server-n07wv1tuz-tahsif1010s-projects.vercel.app/products/'),
      },
      {
        path: '/update/:id', 
        element: <PrivateRoutes><UpdateProduct /></PrivateRoutes>,
        // loader: ({params}) => fetch(`https://brand-shop-new-server-n07wv1tuz-tahsif1010s-projects.vercel.app/products/${params.id}`),
        loader: ()=> fetch('https://brand-shop-new-server-n07wv1tuz-tahsif1010s-projects.vercel.app/products/'),
      },
      {
        path: '/mycart',
        element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
       
      },
      {
        path: '/delete',
        element: <DeleteProduct></DeleteProduct>
      }
    ],
  },
]);

export default router;
