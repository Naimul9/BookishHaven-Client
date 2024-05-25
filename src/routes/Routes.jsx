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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
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
            element: <AddBooks />,
          },
          {
            path: '/all-books',
            element: <AllBooks />,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`),
          },
          {
            path: '/borrowed-books',
            element: <BorrowedBooks />,
          },
          {
            path: '/bookCard/:Category',
            element: <BookCard />,
            loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books?Category=${params.Category}`),
          },
          {
            path: '/book-detail/:id',
            element: <BookDetails />,
            loader : () => fetch(`${import.meta.env.VITE_API_URL}/books`)
          },
          {
            path: '/book-update/:id',
            element: <UpdateBook />,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
          },
        ],
    }
]);

export default router;
