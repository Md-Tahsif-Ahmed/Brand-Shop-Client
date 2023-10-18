import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
  
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
      ]
    },
  ]);

export default router;