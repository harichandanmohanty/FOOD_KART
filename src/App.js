import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import { Suspense, lazy } from 'react';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));


const App = () => {
  return (
    <div id="app">
      <HeaderComponent/>
      <main className="content">
        <Outlet />
      </main>
      <FooterComponent/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <Suspense fallback="Loading About Component..."><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback="Loading Contact Component..."><Contact /></Suspense>,
      },
      {
        path: "/menu/:restaurantId",
        element: <Suspense fallback="Loading Restaurant Menu..."><RestaurantMenu /></Suspense>,
        errorElement: <ErrorComponent/>
      }
    ],
    errorElement: <ErrorComponent />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>,
);
