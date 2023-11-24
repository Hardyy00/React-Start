import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/Product";
import RootLayout from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import ProductDetailsPage from "./components/ProductDetailsPage";

// alternative way of defining routes

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<ProductPage />}></Route>
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/:productid", element: <ProductDetailsPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
