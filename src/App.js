import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "../src/components/RestaurantMenu"

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenu/>,
        errorElement: <ErrorComponent/>
      }
    ],
    errorElement: <ErrorComponent />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>,
);
