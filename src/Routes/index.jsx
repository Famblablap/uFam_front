import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../Layout/HomeRoot";
import Root from "../Layout/root";
import Home from "../Pages/LandingPage/Home";
import Signup2 from "../Pages/Signup/Signup2";
import Login from "../Pages/Login/Login";
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
import Decalogue from "../Pages/App/Decalogue";
import Settings from "../Pages/App/Settings";
import Create from "../Pages/App/Create";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeRoot/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/faq",
                element: <Faq/>
            },
            {
                path: "/aboutus",
                element: <Aboutus/>
            },
            {
                path: "/privacy",
                element: <Privacy/>
            },
            {
                path: "cookies",
                element: <Cookies/>
            },
            {
                path: "/legal",
                element: <Legal/>
            }
        ]
    },
    {
        path: "/signup",
        element: <Signup2/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/app",
        element: <Root/>,
        children: [
            {
                path: "/app",
                element: <Feed/>
            },
            {
                path: "/app/profile",
                element: <Profile/>
            },
            {
                path: "/app/create",
                element: <Create/>
            },
            {
                path: "/app/invitation",
                element: <Invitation/>
            },
            {
                path: "/app/messages",
                element: <Messages/>
            },
            {
                path: "/app/notifications",
                element: <Notifications/>
            },
            {
                path: "/app/decalogue",
                element: <Decalogue/>
            },
            {
                path: "/app/settings",
                element: <Settings/>
            }
        ]
    }
            
])

export default router