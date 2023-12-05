import React, { useState } from "react";
import ImageComponent from "../../components/ImageComponent";
import SearchInput from "../../components/Search";
import BreadcrumbsComponent from "../../components/Breadcumbs";
import images from "../../constans/images";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const links = [
  { href: "/", label: "Home" },
  { href: "/DetailBerita", label: "Detail Berita" }
];

const DetailBerita = () => {
  return (
    <div>
      <div className="max-w-3xl m-auto mt-8 mb-8">
        <div className="py-5 flex flex-col gap-4 md:flex-row md:items-center">
          <h1 className="text-lg font-semibold text-primary1">Dispakan</h1>
          <SearchInput />
        </div>
        <div className="py-2">
          <BreadcrumbsComponent links={links} />
        </div>
        <h1 className="text-5xl font-bold leading-normal">
          Berita Desa Lengkong: UMKM naik level digitalisasi
        </h1>
        <img
          src={images.news1}
          className="w-[796px] h-[393px] object-cover max-w-full mt-8 mb-8 rounded-lg"
        />
        <p className="mt-8 mb-8">
          Diunggah 22 Agustus 2023 oleh Faris Dwi Ramadhan
        </p>
        <p className="text-lg leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book..
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBerita;
