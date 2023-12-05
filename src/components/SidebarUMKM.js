import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function SidebarUMKM() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-[calc(101vh-1rem)] w-auto z-50 ${
        isSidebarOpen ? "border-2 shadow-xl" : ""
      }`}
    >
      <button
        className="absolute top-4 left-4 z-50 bg-white rounded-md p-2 shadow-md "
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {isSidebarOpen && (
        <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <Typography variant="h3" className="text-primary1 text-center">
              Bumdes Citeureup.
            </Typography>
          </div>
          <List>
            <NavLink
              to="/DashboardUMKM"
              className={({ isActive }) =>
                isActive ? "bg-primary1 text-white rounded-2xl" : ""
              }
            >
              <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </NavLink>
            <NavLink
              to="/TambahProdukUMKM"
              className={({ isActive }) =>
                isActive ? "bg-primary1 text-white rounded-2xl" : ""
              }
            >
              <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
                <ListItemPrefix>
                  <PlusCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Tambah Produk
              </ListItem>
            </NavLink>
            <NavLink
              to="/DaftarProdukUMKM"
              className={({ isActive }) =>
                isActive ? "bg-primary1 text-white rounded-2xl" : ""
              }
            >
              <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                Daftar Produk
              </ListItem>
            </NavLink>
            <NavLink
              to="/PengaturanProfilUMKM"
              className={({ isActive }) =>
                isActive ? "bg-primary1 text-white rounded-2xl" : ""
              }
            >
              <ListItem className="hover:bg-primary1 rounded-2xl focus:bg-transparent">
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Pengaturan Profil
              </ListItem>
            </NavLink>
          </List>
        </Card>
      )}
    </div>
  );
}
