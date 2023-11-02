import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/error-page/ErrorPage";
import ProductList from "./components/products/product-list/ProductList";
import ProductItem from "./components/products/product-item/ProductItem";
import Layout from "./components/layout/Layout";
import Home from "./components/home-page/HomePage";
import ProductIndex from "./components/products/product-index/ProductIndex";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/product-list",
        element: <ProductList />,
        children: [
          { index: true, element: <ProductIndex /> },
          {
            path: ":productId",
            element: <ProductItem />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
