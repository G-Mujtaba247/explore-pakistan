import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavLink, useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // ICONS

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed w-full top-0 left-0 z-50 bg-[#E4E6E4] backdrop-blur-lg border-b shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">

        {/* --------- LEFT: Logo --------- */}
        <div className="flex items-center gap-3">
          <img
            src="logo.png"
            alt="logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>

        {/* --------- DESKTOP MENU --------- */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-3">

              <NavigationMenuItem>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/40 rounded-full px-4 py-2",
                    isActive && "bg-green-100 text-green-700"
                  )}
                >
                  Home
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  to="/about"
                  className={({ isActive }) => cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/40 rounded-full px-4 py-2",
                    isActive && "bg-green-100 text-green-700"
                  )}
                >
                  About
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  to="/tours"
                  className={({ isActive }) => cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/40 rounded-full px-4 py-2",
                    isActive && "bg-green-100 text-green-700"
                  )}
                >
                  Tours
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  to="/booking"
                  className={({ isActive }) => cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/40 rounded-full px-4 py-2",
                    isActive && "bg-green-100 text-green-700"
                  )}
                >
                  Bookings
                </NavLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-accent/40 rounded-full px-4 py-2",
                    isActive && "bg-green-100 text-green-700"
                  )}
                >
                  Contact
                </NavLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* --------- DESKTOP BUTTONS --------- */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="secondary" onClick={() => navigate("/signup")}>
            Register
          </Button>

          <Button
            onClick={() => navigate("/login")}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Login
          </Button>
        </div>

        {/* --------- MOBILE MENU ICON --------- */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --------- MOBILE DROPDOWN MENU --------- */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-4">

          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn(
              "block text-lg font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md",
              isActive && "bg-green-100 text-green-700"
            )}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn(
              "block text-lg font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md",
              isActive && "bg-green-100 text-green-700"
            )}
          >
            About
          </NavLink>

          <NavLink
            to="/tours"
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn(
              "block text-lg font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md",
              isActive && "bg-green-100 text-green-700"
            )}
          >
            Tours
          </NavLink>

          <NavLink
            to="/booking"
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn(
              "block text-lg font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md",
              isActive && "bg-green-100 text-green-700"
            )}
          >
            Bookings
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) => cn(
              "block text-lg font-medium text-gray-700 hover:text-green-600 px-3 py-2 rounded-md",
              isActive && "bg-green-100 text-green-700"
            )}
          >
            Contact
          </NavLink>

          {/* MOBILE BUTTONS */}
          <div className="pt-2 flex flex-col gap-3">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                navigate("/signup");
                setOpen(false);
              }}
            >
              Register
            </Button>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white w-full"
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
