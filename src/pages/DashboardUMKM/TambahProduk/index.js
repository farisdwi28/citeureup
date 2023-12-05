import React, { useState } from "react";
import SidebarUMKM from "../../../components/SidebarUMKM";
import FormAddProduct from "../../../components/DashboardUMKM/AddProductUMKM";

const TambahProduk = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex page-container max-w-screen">
        <SidebarUMKM />
        <main className="flex-grow container mx-auto flex justify-center items-center">
          <FormAddProduct />
        </main>
      </div>
    </div>
  );
};

export default TambahProduk;
