import { HomeIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contacts from "./pages/Contacts.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contacts",
    to: "/contacts",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <Contacts />,
  },
];