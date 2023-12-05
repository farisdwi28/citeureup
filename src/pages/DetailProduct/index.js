import React, { useState } from "react";
import SearchInput from "../../components/Search";
import BreadcrumbsComponent from "../../components/Breadcumbs";
import ImageComponent from "../../components/ImageComponent";
import { images } from "../../constans";
import { Checkbox, Typography } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";

const links = [
  { href: "/", label: "Home" },
  { href: "/DetailProduct", label: "Detail Product" }
];

const dummyImages = [
  { src: images.product1, alt: "Product1" },
  { src: images.product2, alt: "Product1" },
  { src: images.product3, alt: "Product1" },
  { src: images.product3, alt: "Product1" }
];

const flavors = ["Batagor", "Kicimpring", "Emplod", "Cireng"];

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
  }
];

const DetailProduct = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = src => {
    setPreviewImage(src);
  };



  const limitedData2 = DummyData3.slice(0, 4);

  return (
    <div>
      <div className="container mx-auto ">
        {/* // Nav Detail Product */}
        <div className="py-5 flex flex-col gap-4 md:flex-row md:items-center">
          <h1 className="text-lg font-semibold text-primary1">Bumdes Citeureup.</h1>
          <SearchInput />
        </div>
        <div className="py-2">
          <BreadcrumbsComponent links={links} />
        </div>
        {/* Body */}
        <div className="py-5">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-col">
              <div className="w-full lg:w-[500px] h-[500px] py-[59px] bg-white rounded-2xl border border-stone-300 justify-center items-center gap-[53px] inline-flex">
                <ImageComponent
                  src={images.product1}
                  className="w-[415px] h-[382px]"
                  alt="Product1"
                  onClick={() => handleImageClick(images.product1)}
                />
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-2 w-[500px]">
                {dummyImages.map((image, index) => (
                  <ImageComponent
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleImageClick(image.src)}
                    className="w-full h-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full max-w-[400px] ml-14">
              <div className="flex flex-col">
                <div className="flex text-black text-[24px] font-semibold leading-normal tracking-wider">
                  <h1>Kue Kembang Jahe</h1>
                  <div className="ml-20">
                    <Checkbox
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                      defaultChecked
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="w-[228px] h-[29px] text-[16px] ">
                    <p className="py-2 opacity-75">Kue Kembang Jahe</p>
                  </div>
                  <div className="pt-1">
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center gap-1.5 font-normal opacity-75"
                    >
                      <MapPinIcon className="-mt-0.5 h-5 w-5 text-red-700" />
                      Desa sukabirus
                    </Typography>
                  </div>
                  <div className="flex pt-1">
                    <div className="flex gap-2">
                      <div className="text-black text-[14px] font-normal opacity-50">
                        64 Disukai
                      </div>
                      <div className="w-4 h-[0px] mt-2 rotate-90 opacity-50 border border-black"></div>
                      <div className="text-black text-[14px] font-normal opacity-50">
                        15 Komentar
                      </div>
                      <div className="w-4 h-[0px] mt-2 rotate-90 opacity-50 border border-black"></div>
                      <div className="text-lime-600 text-[14px] font-normal opacity-60">
                        Tersedia
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="text-black text-[24px] font-normal leading-normal tracking-wider">
                      Rp 17.500
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="w-[373px] text-black text-[14px] font-normal leading-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                  <div className="py-5">
                    <div className="w-[400px] h-[0px] border border-black"></div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="text-black text-[18px]">
                      <p>Varian</p>
                    </div>
                    <div className="grid gap-4 grid-cols-2 grid-rows-2">
                      {flavors.map(flavor => (
                        <span
                          key={flavor}
                          className="px-4 py-2 border-2 rounded-lg bg-white text-black text-center font-semibold"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 py-2">
                    <div className="text-black text-[18px]">
                      <p>Lakukan Pemesanan</p>
                    </div>
                    <div className="flex gap-4">
                      <Link to="#">
                        <img src={images.shopee} alt="Shopee" />
                      </Link>
                      <Link to="#">
                        <img src={images.tokped} alt="Tokopedia" />
                      </Link>
                      <Link to="#">
                        <img src={images.tt} alt="Toko Tani" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 pt-2">
                    <div className="text-black text-[18px]">
                      <p>Hubungi Kami</p>
                    </div>
                    <div className="flex gap-4">
                      <Link to="#">
                        <img src={images.wa} alt="WhatsApp" />
                      </Link>
                      <Link to="#">
                        <img src={images.line} alt="Line" />
                      </Link>
                      <Link to="#">
                        <img src={images.ig} alt="Instagram" />
                      </Link>
                      <Link to="#">
                        <img src={images.fb} alt="Facebook" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {previewImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              onClick={() => setPreviewImage(null)}
            >
              <img
                className="h-[700px] max-w-full"
                src={previewImage}
                alt="Preview"
              />
            </div>
          )}
        </div>
        <div class="flex justify-between pt-8">
          <div class="w-1/2">
            <h1 class="text-3xl font-bold dark:text-white py-4">
              Produk Serupa
            </h1>
          </div>
          <div class="w-1/2 flex justify-end">
            <p class="text-right text-primary1 text-lg font-medium py-4">
              Lihat lainnya
            </p>
          </div>
        </div>
        <div className="flex gap-3 py-10 overflow-x-auto">
          {limitedData2.map(data => (
            <ProductCard key={data.id} {...data} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
