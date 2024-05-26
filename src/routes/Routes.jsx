import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import AddBooks from "../pages/AddBooks";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import BookCard from "../components/BookCard";
import BookDetails from "../components/BookDetails";
import UpdateBook from "../components/UpdateBook";
import Error from "../pages/Error";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`),
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/registration',
            element: <Register />,
          },
          {
            path: '/add-books',
            element: <PrivateRoutes><AddBooks /></PrivateRoutes>,
          },
          {
            path: '/all-books',
            element: <AllBooks />,
            // loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`),
          },
          {
            path: '/borrowed-books',
            element: <PrivateRoutes><BorrowedBooks /></PrivateRoutes>,
          },
          {
            path: '/bookCard/:Category',
            element: <PrivateRoutes><BookCard /></PrivateRoutes>,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books/category?Category=${params.Category}`),
          },
          {
            path: '/book-detail/:id',
            element: <BookDetails /> ,
            loader : () => fetch(`${import.meta.env.VITE_API_URL}/books`)
          },
          {
            path: '/book-update/:id',
            element: <PrivateRoutes><UpdateBook /></PrivateRoutes> ,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
          },
        ],
    }
]);

export default router;
