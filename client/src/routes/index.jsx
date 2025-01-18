import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BookAppointmentPage from "../pages/BookApointmentPage";
import AboutUs from "../pages/Aboutus";
import Scheduler from "../pages/Sheduler";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "book-appointment",
        element: <BookAppointmentPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path:"sheduler",
        element:<Scheduler/>
      },
    ],
  },
]);

export default router;
