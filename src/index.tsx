import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index/Index";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { UserManage } from "./pages/UserManage/UserManage";
import { Login } from "./pages/Login/Login";
import { Menu } from "./pages/Menu/Menu";

const routes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Menu />,
        children: [
          {
            path: "user_manage",
            element: <UserManage />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router} />);
