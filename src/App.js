import { Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";

// import pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Dashboard/dashboard";
import DashboardUMKM from "./pages/DashboardUMKM/DashboardUMKM";
import AddUMKM from "./pages/Dashboard/TambahUMKM";
import UMKM from "./pages/Dashboard/Mitra";
import Produk from "./pages/Dashboard/DaftarProduk";
import Berita from "./pages/Dashboard/KelolaBerita";
import Profil from "./pages/Dashboard/PengaturanProfil";
import Notifikasi from "./pages/Dashboard/Notifikasi";
import DetailProduct from "./pages/DetailProduct";
import DetailBerita from "./pages/DetailBerita";
import TambahProduk from "./pages/DashboardUMKM/TambahProduk";
import PengaturanProfilUMKM from "./pages/DashboardUMKM/PengaturanProfile";
import DaftarProdukUMKM from "./pages/DashboardUMKM/DaftarProduk";
import FoodCategory from "./pages/Category/FoodDrinkCategory";
import KueCategory from "./pages/Category/KueCategory";
import FashionCategory from "./pages/Category/FashionCategory";
import KertaCategory from "./pages/Category/KertaCategory";
import TanamanCategory from "./pages/Category/TanamanCategory";
import OtomotifCategory from "./pages/Category/OtomotifCategory";
import PromoPage from "./pages/Category/PromoPage";
import NewsPage from "./pages/Category/NewsPage";
import ProductPage from "./pages/Category/ProductPage";
import UsahaMitra from "./pages/Dashboard/UsahaMitra/index";
// page login umkm
import LoginPageUMKM from "./pages/DashboardUMKM/LoginPakeUMKM";

// import component
import UMKMRoute from "./components/UmkmRoute";
import BumdesRoute from "./components/BumdesRoute";
import UMKMSelectStore from "./pages/Login/UMKMSelectStore";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/FoodDrinkCategory" element={<FoodCategory />} />
        <Route path="/KueCategory" element={<KueCategory />} />
        <Route path="/FashionCategory" element={<FashionCategory />} />
        <Route path="/KerajinanCategory" element={<KertaCategory />} />
        <Route path="/TanamanCategory" element={<TanamanCategory />} />
        <Route path="/OtomotifCategory" element={<OtomotifCategory />} />
        <Route path="/PromoPage" element={<PromoPage />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route
          path="/Dashboard"
          element={
            <BumdesRoute>
              <Dashboard />
            </BumdesRoute>
          }
        />
        <Route
          path="/UMKMSelectStore"
          element={
            <UMKMRoute>
              <UMKMSelectStore />
            </UMKMRoute>
          }
        />
        <Route
          path="/DashboardUMKM"
          element={
            <UMKMRoute>
              <DashboardUMKM />
            </UMKMRoute>
          }
        />
        <Route
          path="/TambahUMKM"
          element={
            <BumdesRoute>
              <AddUMKM />
            </BumdesRoute>
          }
        />
        <Route
          path="/UMKM"
          element={
            <BumdesRoute>
              <UMKM />
            </BumdesRoute>
          }
        />
        <Route
          path="/UsahaMitra"
          element={
            <BumdesRoute>
              <UsahaMitra />
            </BumdesRoute>
          }
        />
        <Route
          path="/DaftarProduk"
          element={
            <BumdesRoute>
              <Produk />
            </BumdesRoute>
          }
        />
        <Route
          path="/KelolaBerita"
          element={
            <BumdesRoute>
              <Berita />
            </BumdesRoute>
          }
        />
        <Route
          path="/PengaturanProfil"
          element={
            <BumdesRoute>
              <Profil />
            </BumdesRoute>
          }
        />

        <Route
          path="/Notifikasi"
          element={
            <UMKMRoute>
              <Notifikasi />
            </UMKMRoute>
          }
        />
        <Route path="/DetailProduct" element={<DetailProduct />} />
        <Route path="/DetailBerita" element={<DetailBerita />} />
        <Route
          path="/TambahProdukUMKM"
          element={
            <UMKMRoute>
              <TambahProduk />
            </UMKMRoute>
          }
        />
        <Route
          path="/DaftarProdukUMKM"
          element={
            <UMKMRoute>
              <DaftarProdukUMKM />
            </UMKMRoute>
          }
        />
        <Route
          path="/PengaturanProfilUMKM"
          element={
            <UMKMRoute>
              <PengaturanProfilUMKM />
            </UMKMRoute>
          }
        />
      </Routes>
    </div>
  );
}
