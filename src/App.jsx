import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routs/Root";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./pages/products/Products";
import NotFound from "./components/notFound/NotFound";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import ProductDetailes from "./pages/productdetailes/ProductDetailes";
import AllProducts from "./pages/allProducts/AllProducts";
import Category from "./pages/category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: (
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/category/:id",
        element: (
          <ProtectedRoutes>
            <Category />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/productdetailes/:id",
        element: (
          <ProtectedRoutes>
            <ProductDetailes />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/productdetailes/:id",
        element: <ProductDetailes />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
