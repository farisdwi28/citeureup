import React, { useState } from "react";
import SearchInput from "../../components/Search";
import BreadcrumbsComponent from "../../components/Breadcumbs";
import { images } from "../../constans";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import MainLayout from "../../components/MainLayout";

const links = [
  { href: "/", label: "Home" },
  { href: "/KueCategory", label: "Kue atau Jajanan" }
];

// dummy data
const DummyData3 = [
  {
    id: 1,
    img: `${images.product1}`,
    title: "Kue Kembang Jahe",
    price: 23000,
    owner: "Ainun Cake",
    address: "Desa sukabirus",
    like: 20,
    value: 5
  },
  {
    id: 2,
    img: `${images.product2}`,
    title: "Kue Kembang Buah",
    price: 23000,
    owner: "Makpingah",
    address: "Desa sukabirus",
    like: 20,
    value: 0
  },
  {
    id: 3,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 17500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 2
  },
  {
    id: 4,
    img: `${images.product3}`,
    title: "Boboko Snack",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 0
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 10
  },
  {
    id: 6,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 10
  },
  {
    id: 7,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 10
  },
  {
    id: 8,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 10
  }
];

const KuePage = () => {
  return (
    <MainLayout>
      <section>
        <div className="container mx-auto">
          <div className="py-2">
            <BreadcrumbsComponent links={links} />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold dark:text-white mt-5 ml-5 py-5">
              Kategori Kue
            </h1>
          </div>
          {/* body category */}
          <div className="flex flex-wrap gap-3 justify-between py-5 m-6">
            {DummyData3.map(data => (
              <ProductCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default KuePage;
