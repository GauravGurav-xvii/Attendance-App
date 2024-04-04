import "./App.css";
import Login from "./pages/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import HomeAttendancePage from "./pages/HomeAttendance/HomeAttendancePage";
import UserAttendancePage from "./pages/UserAttendance/UserAttendancePage";
import Admin from "./pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/homeattendance",
    element: <HomeAttendancePage />,
  },
  {
    path: "/viewreport",
    element: <UserAttendancePage />,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
]);

function App() {


  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
