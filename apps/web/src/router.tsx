import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter([
  { element: <GuestLayout/>, children: [
    { path: "/", element: <Landing/> },
    { path: "/about", element: <About/> },
    { path: "/pricing", element: <Pricing/> },
    { path: "/contact", element: <Contact/> },
    { path: "/404", element: <NotFound/> },
  ]},
  { path: "*", element: <Navigate to="/404" replace /> }
  
]);

