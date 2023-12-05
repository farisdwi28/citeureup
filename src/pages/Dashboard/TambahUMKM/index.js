import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import FormAddMitra from "../../../components/Mitra/FormAddMitra";

const AddUMKM = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex page-container max-w-screen">
        <Sidebar />
        <main className="flex-grow container mx-auto flex justify-center items-center">
          <FormAddMitra />
        </main>
      </div>
    </div>
  );
};

export default AddUMKM;
