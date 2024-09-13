import { HomeIcon, UsersIcon, InfoIcon, MailIcon, CalendarIcon, NewspaperIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contacts from "./pages/Contacts.jsx";
import AboutCEF from "./pages/AboutCEF.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import EventCalendar from "./pages/EventCalendar.jsx";
import Newsletters from "./pages/Newsletters.jsx";

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
  {
    title: "About CEF",
    to: "/about-cef",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <AboutCEF />,
  },
  {
    title: "Contact Us",
    to: "/contact-us",
    icon: <MailIcon className="h-4 w-4" />,
    page: <ContactUs />,
  },
  {
    title: "Event Calendar",
    to: "/events",
    icon: <CalendarIcon className="h-4 w-4" />,
    page: <EventCalendar />,
  },
  {
    title: "Newsletters",
    to: "/newsletters",
    icon: <NewspaperIcon className="h-4 w-4" />,
    page: <Newsletters />,
  },
];