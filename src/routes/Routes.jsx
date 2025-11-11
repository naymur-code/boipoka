import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import WishList from "../pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("booksData.json"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("booksData.json"),
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "wishList",
        loader: () => fetch("booksData.json"),
        element: <WishList></WishList>,
      },
      {
        path: "/book-details/:id",
        loader: () => fetch("booksData.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
