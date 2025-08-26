import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const currentLocation = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [currentLocation]);

  return (
    <div>
      <Navbar />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
