import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountUmkm() {
  return (
    <div className="bg-white object-center rounded-3xl border-2 border-primary3-100 p-4 md:p-8 w-[350px] sm:w-[440px] sm:w-[530px] sm:w-[550px] sm:w-[640px]  md:w-full lg:w-full xl:w-full 2xl:w-full">
      <h2 className="text-2xl font-semibold text-center items-center text-primary1 mb-2">
        Bumdes Citeureup
      </h2>
      <h2 className="text-3xl font-semibold text-center items-center text-primary1 mb-2">
        Selamat Datang Kembali, Nama
      </h2>
      <p className="font-medium text-lg text-center items-center text-primary3 md:text-xl mb-4">
        Silahkan pilih untuk masuk dashboard usaha Anda
      </p>
    </div>
  );
}
