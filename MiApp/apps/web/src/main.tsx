import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";

export function RootLayout() {
  return (
    <div className="min-h-dvh">
      <nav className="flex gap-4 p-4 border-b">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/about" className="font-medium">About</Link>
      </nav>
      <main className="max-w-4xl p-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);