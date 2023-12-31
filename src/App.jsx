import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./page/Layout";
import TradingViewWidget from "./page/RealTimeChart";
import FR from "./page/FR";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <span>error</span>,
    children: [
      {
        path: "/chart",
        element: <TradingViewWidget />,
      },
      {
        path: "/FR",
        element: <FR />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
