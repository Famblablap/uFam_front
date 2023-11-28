import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../Layout/HomeRoot";
import Root from "../Layout/root";
import Home from "../Pages/LandingPage/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Feed from "../Pages/App/Feed";
import Faq from "../Pages/LandingPage/Faq";
import Aboutus from "../Pages/LandingPage/Aboutus";
import Privacy from "../Pages/LandingPage/Privacy";
import Cookies from "../Pages/LandingPage/Cookies";
import Legal from "../Pages/LandingPage/Legal";
import Profile from "../Pages/App/Profile";
import Invitation from "../Pages/App/Invitation";
import Messages from "../Pages/App/Messages";
// import MessagesId from "../Pages/App/MessagesId";
import Notifications from "../Pages/App/Notifications";
import Decalogue from "../Pages/LandingPage/Decalogue";
import Settings from "../Pages/App/Settings";
import Create from "../Pages/App/Create";
import FamProfile from "../Pages/App/FamProfile";
import Support from "../Pages/LandingPage/Support";
import Contact from "../Pages/LandingPage/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "cookies",
        element: <Cookies />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/decalogue",
        element: <Decalogue/>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/app",
    element: <Root />,
    children: [
      {
        path: "/app",
        element: <Feed />,
      },
      {
        path: "/app/profile",
        element: <Profile />,
      },
            {
                path: "/app/profile/:id",
                element: <FamProfile/>
            },
      {
        path: "/app/create",
        element: <Create />,
      },
      {
        path: "/app/invitation",
        element: <Invitation />,
      },
      {
        path: "/app/messages",
        element: <Messages />,
      },
      {
        path: "/app/notifications",
        element: <Notifications />,
      },
      {
        path: "/app/decalogue",
        element: <Decalogue />,
      },
      {
        path: "/app/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router