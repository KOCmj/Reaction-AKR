import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Membership from "../pages/Membership";
import ProfilePage from "../components/ProfilePage";
import Visit from "../components/Visit";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: RouteType[] = [
  {
    path: "",
    component: Home,
    name: "Home Screen", 
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
  }, 
  {
    path: "/membership",
    component: Membership,
    name: "Membership",
  },
  {
    path: "/profile",
    component: ProfilePage,
    name: "Profile",
  },
  {
    path: "/visit",
    component: Visit,
    name: "Visit"
  }
];

export default routes