import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Shop from "../components/Shop";
import Cart from "../components/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
