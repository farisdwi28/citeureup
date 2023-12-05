import React, { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";

const FormAddProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState({
    active_on: "sukabirus",
    id_umkm: localStorage.getItem("umkm_store")
  });

  const handlesubmit = async () => {
    const form = new FormData()
    for (const k of Object.keys(data)) {
      form.append(k, data[k]);
    }
    form.append("files", selectedFile);
    form.append("sale", 0);
    const token = getToken();

    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/product/upload`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart/form-data"
      },
      data: form
    };

    try {
      if (window.confirm("Apakah data telah sesuai?")) {
        await fetch(options);
        window.location.reload(true);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }

    // setIsLoading(false);
  }

  const categories = [
    "Makanan & Minuman",
    "Fashion",
    "Elektronik",
    "Otomotif",
    "Kerajinan Tangan"
  ];

  const handleCategoryChange = event => {
    setData({ ...data, category: event.target.value });
  };

  const descriptioncategories = ["Varian Rasa", "Tipe", "Seri", "Jenis Bahan"];

  const handleDescriptionChange = event => {
    setSelectedDescription({ ...data, others_description: event.target.value });
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="container mx-auto">
      <div className="m-20">
        <h2 className="text-3xl font-semibold text-primary1 my-4 text-left">
          Tambah Produk Baru Mr. Mangkok
        </h2>
        <div className="bg-white p-6 md:p-8 border shadow-2xl rounded-xl">
          {/* form */}
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            {/* nama product */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Nama Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan min. 40 karakter agar lebih menarik
              </p>
              <input
                type="text"
                class="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please masukan judul produk.
              </p>
            </div>
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Foto Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Format foto .jpg .jpeg .png dan minimal ukuran 300 x 300px
                (maks. 10 foto)
              </p>
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <p className="block text-gray-600 font-medium text-sm mt-2">
                  {selectedFile.name}
                </p>
              )}
            </div>
            {/* harga product */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                harga Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan harga yang sesuai dengan produk
              </p>
              <input
                type="number"
                class="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                onChange={(e) => { setData({ ...data, price: parseInt(e.target.value) }) }}
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please masukan harga produk.
              </p>
            </div>
            {/* Deskripsi Produk */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Deskripsi Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Sertakan min. 100 karakter untuk memudahkan pembeli memahami dan
                menemukan produk Anda
              </p>
              <textarea
                className="peer ... w-full  border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                rows="4"
                onChange={(e) => { setData({ ...data, description: e.target.value }) }}
              />
              <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
                Please deskripsi yang sesuai dengan produk.
              </p>
            </div>
            {/* kategori produk */}
            <div className="mb-2">
              <label className="block text-black font-medium text-lg mb-2">
                Kategori Produk
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Pilih kategori yang sesuai dengan produk
              </p>
              {/* dropdown */}
              <select
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="" disabled selected>
                  Pilih Kategori
                </option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* deskripsi lainnya */}
            <div className="mb-8">
              <label className="block text-black font-medium text-lg mb-2">
                Deskripsi Lainnya
              </label>
              <p className="block text-gray-600 font-medium text-sm mb-2">
                Pilih kategori yang sesuai dengan produk
              </p>
              {/* dropdown */}
              <select
                className="peer ... w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                value={selectedDescription}
                onChange={handleDescriptionChange}
              >
                <option value="" disabled selected>
                  Pilih Untuk Lainnya
                </option>
                {descriptioncategories.map(descriptioncategories => (
                  <option
                    key={descriptioncategories}
                    value={descriptioncategories}
                  >
                    {descriptioncategories}
                  </option>
                ))}
              </select>
            </div>
            <ButtonSubmit label="Simpan" onClick={handlesubmit} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddProduct;
