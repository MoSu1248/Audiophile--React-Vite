import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";

export default function Layout() {
  const currentLocation = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation]);

  return (
    <div>
      <MobileNav /> 
      <Navbar />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
