import React, { useState } from "react";
import SidebarUMKM from "../../../components/SidebarUMKM";
import { ChevronDownIcon, CameraIcon } from "@heroicons/react/24/solid";
import { Tooltip, Switch } from "@material-tailwind/react";
import { images } from "../../../constans";
import ButtonSubmit from "../../../components/ButtonSubmit";

const PengaturanProfilUMKM = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  // const handle image upload
  const handleFileChange = event => {
    // Logika
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300">
      <SidebarUMKM />
      <div className="flex-grow flex flex-col justify-center mt-20 mx-4 md:mx-32">
        {/* pengaturan profile */}
        <div className="relative max-w-full overflow-hidden mb-4">
          <input
            type="checkbox"
            className="peer absolute top-0 insert-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
            checked={isOpen}
            onChange={handleDropdownToggle}
          />
          <div className="bg-white h-20 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-black">Profile</h1>
          </div>
          <div className="absolute top-7 right-8 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <Tooltip content="View More">
              <ChevronDownIcon className="w-6 h-6" />
            </Tooltip>
          </div>
          {/* content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
            <div className="p-4 flex flex-col justify-center">
              <div className="flex flex-col items-center relative">
                <input
                  type="file"
                  id="uploadImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="uploadImage" className="cursor-pointer">
                  <div className="relative">
                    <img
                      src={images.banner1}
                      className="rounded-full flex justify-center w-[114px] h-[114px] mt-10 hover:shadow-md transition duration-300"
                    />
                    <div className="absolute -top-2 flex items-center justify-center bg-white bg-opacity-20 rounded-full w-8 h-8 mt-2 shadow-md hover:bg-black-100 cursor-pointer w-[114px] h-[114px]">
                      <CameraIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </label>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Gambar yang diunggah harus berukuran lebar 500px dan panjang
                  500px
                </p>
              </div>
              {/* form profile */}
              <div className="w-full mt-8">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  {/* nama profile */}
                  <div className="mb-4">
                    <label
                      class="block text-gray-700 font-medium text-lg mb-2 "
                      for="nama"
                    >
                      Nama Toko
                    </label>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Desa sukabirus"
                    />
                  </div>
                  {/* alamat bumdes */}
                  <div className="mb-4">
                    <label
                      class="block text-gray-700 font-medium text-lg mb-2 "
                      for="alamat"
                    >
                      Alamat Toko
                    </label>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Jalan sukabirus"
                    />
                  </div>
                  {/* kontak bumdes */}
                  <div className="mb-4">
                    <label
                      class="block text-gray-700 font-medium text-lg mb-2 "
                      for="kontak"
                    >
                      Kontak
                    </label>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="0822249823"
                    />
                  </div>
                  {/* email */}
                  <div className="mb-4">
                    <label
                      class="block text-gray-700 font-medium text-lg mb-2 "
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="admin@gmail.com"
                    />
                  </div>
                  <ButtonSubmit label="Update Profile" />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* pengaturan password */}
        <div className="relative max-w-full overflow-hidden">
          <input
            type="checkbox"
            className="peer absolute top-0 insert-x-0 w-full h-20 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white h-20 w-full pl-5 flex items-center">
            <h1 className="text-lg font-semibold text-black">Link Media</h1>
          </div>
          <div className="absolute top-7 right-8 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <Tooltip content="View More">
              <ChevronDownIcon className="w-6 h-6" />
            </Tooltip>
          </div>
          {/* content */}
          <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen">
            <div className="p-4">
              {/* form password */}
              <div className="w-full">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <h1 className="text-lg font-semibold text-black">
                    Media Pemesanan
                  </h1>
                  {/* Shopee */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.shopee}
                          alt="Shopee"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Shopee"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Shopee
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="shopee" color="green" />
                      </div>
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Shopee"
                    />
                  </div>
                  {/* tokopedia */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.tokped}
                          alt="Tokopedia"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Tokopedia"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Tokopedia
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="tokopedia" color="green" />
                      </div>
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Tokopedia"
                    />
                  </div>
                  {/* tiktok */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.tt}
                          alt="Tiktok"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Tiktok"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Tiktok
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="tiktok" color="green" />
                      </div>
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Tiktok"
                    />
                  </div>
                  <h1 className="text-lg font-semibold text-black mb-4 mt-8">
                    Media Kontak
                  </h1>
                  {/* Whatsapp */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.wa}
                          alt="whatsapp"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Whatsapp"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Whatsapp
                        </label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="whatsapp" color="green" />
                      </div>
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Whatsapp"
                    />
                  </div>
                  {/* Line */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.line}
                          alt="Line"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Line"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Line
                        </label>
                      </div>
                      <Switch id="line" color="green" />
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Line"
                    />
                  </div>
                  {/* Instagram */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.ig}
                          alt="Instagram"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Instagram"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Instagram
                        </label>
                      </div>
                      <Switch id="instagram" color="green" />
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Instagram"
                    />
                  </div>
                  {/* Facebbok */}
                  <div className="mb-4 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={images.fb}
                          alt="Facebook"
                          className="w-10 h-10"
                        />
                        <label
                          htmlFor="Facebook"
                          className="text-gray-700 font-medium text-lg"
                        >
                          Facebook
                        </label>
                      </div>
                      <Switch id="facebook" color="green" />
                    </div>
                    <input
                      className="w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                      type="text"
                      placeholder="Link Facebook"
                    />
                  </div>
                  <ButtonSubmit label="Simpan" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengaturanProfilUMKM;
