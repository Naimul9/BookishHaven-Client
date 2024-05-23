import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Authentication/Login";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import AddBooks from "../pages/AddBooks";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/books`),
          },
          {
            path: '/login',
            element: <Login/>,
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
            element: <AllBooks/>,
          },
          {
            path: '/borrowed-books',
            element: <BorrowedBooks />,
          },
        ],
        }
  ]);

  export default router