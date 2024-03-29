import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./RootLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
