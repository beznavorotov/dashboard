import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home";
import './style/global.scss';

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contantContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
