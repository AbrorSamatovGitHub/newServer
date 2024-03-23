import React from "react";
import Header from "./header/header";
import { Footer } from "./footer/footer";
import { Outlet } from "react-router-dom";
export const MainLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
