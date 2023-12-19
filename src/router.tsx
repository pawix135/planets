import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Planet from "./pages/Planet";
import { getPlanet } from "./utils/planet";
import { routes } from "./constants/routes";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      path: route.path,
      errorElement: <ErrorPage />,
      element: <Planet />,
      loader: () => getPlanet(route.planetName),
    })),
  },
]);

export default router;
