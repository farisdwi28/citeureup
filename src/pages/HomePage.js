import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import Carou from "../components/Carou";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";
import images from "../constans/images";
import { Link, json, useLocation, useSearchParams } from "react-router-dom";
import { logPageView } from "../utils/analytics";
import { getToken, getUserData } from "../utils/storage";
import fetch from "../utils/fetch";

// dummy card diskon
const DummyData1 = [
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
    value: 5
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
    value: 5
  },
  {
    id: 5,
    img: `${images.product2}`,
    title: "Boboko",
    price: 27500,
    owner: "Boboko Sundase Snack",
    address: "Desa sukabirus",
    like: 20,
    value: 5
  }
];
// datadummy card tidak diskon
const DummyData2 = [
  {
    id: 1,
    img: `${images.product1}`,
    title: "Kue Kembang Jahe",
    price: 23000,
    owner: "Ainun Cake",
    address: "Desa sukabirus",
    like: 20,
    value: 0
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
    value: 0
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
    value: 0
  }
];
//datadummy card UMKM All
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

const limitedData = DummyData1.slice(0, 4);
const limitedData2 = DummyData3.slice(0, 4);


const HomePage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [menarik, setMenarik] = useState(limitedData);
  const [terlaris, setTerlaris] = useState(limitedData);

  const getTerlaris = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/landing-page/product`,
      params: {
        active_on: 'sukabirus',
        sort_by: JSON.stringify({ best_seller: true }),
        search: '',
        catagory: ''
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "X-API-KEY" : "admin2023",
      }
    };
    try {
      const response = await fetch(options);
      if (Array.isArray(response.data)) {
        setTerlaris(response.data);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };

  const getTerdiskon = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/landing-page/product`,
      params: {
        active_on: 'sukabirus',
        sort_by: JSON.stringify({ best_sale: true }),
        search: '',
        catagory: ''
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "X-API-KEY" : "admin2023",
      }
    };
    try {
      const response = await fetch(options);
      if (Array.isArray(response.data)) {
        setMenarik(response.data);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };


  useEffect(() => {
    getTerlaris();
    getTerdiskon();
    logPageView(); 
  }, [location]);

  return (
    <MainLayout>
      <section>
        <div className="container mx-auto mb-8">
          <Carou />
          <div className="w-1/2">
            <h1 className="text-3xl font-bold dark:text-white py-4 mt-4 ml-5">
              Kategori
            </h1>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 justify-between pt-5 gap-3">
            <Link
              to="/FoodDrinkCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1 "
            >
              <img src={images.MM} alt="Makanan & Minuman" />
              <p className="pt-4 text-center">Makanan & Minuman</p>
            </Link>
            <Link
              to="/KueCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1"
            >
              <img src={images.Kue} alt="Kue" />
              <p className="pt-4">Kue</p>
            </Link>
            <Link
              to="/FashionCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1"
            >
              <img src={images.Hangar} alt="Fashion" />
              <p className="pt-4">Fashion</p>
            </Link>
            <Link
              to="/KerajinanCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1"
            >
              <img src={images.KT} alt="Kerajinan Tangan" />
              <p className="pt-4">Kerajinan Tangan</p>
            </Link>
            <Link
              to="/TanamanCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1"
            >
              <img src={images.Daun} alt="Tanaman" />
              <p className="pt-4">Tanaman</p>
            </Link>
            <Link
              to="/OtomotifCategory"
              className="border-2 rounded-lg w-full md:w-auto h-auto px-4 md:px-8 py-4 flex flex-col items-center hover:bg-primary1"
            >
              <img src={images.Otomotif} alt="Otomotif" />
              <p className="pt-4">Otomotif</p>
            </Link>
          </div>

          {/* Diskon */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4 ml-5">
                Promo Menarik
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <Link to="/PromoPage">
                <p className="text-right text-primary1 text-lg font-medium py-4 mr-5">
                  Lihat lainnya
                </p>
              </Link>
            </div>
          </div>
          {/* Promo Sementara */}
          <Link to="/DetailProduct">
            <div className="flex flex-wrap gap-3 justify-start py-5 m-6">
              {menarik.map(data => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Promo */}
          {/* Terlaris */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4 ml-5">
                Produk Terlaris
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <Link to="/PromoPage">
                <p className="text-right text-primary1 text-lg font-medium py-4 mr-5">
                  Lihat lainnya
                </p>
              </Link>
            </div>
          </div>
          {/* Produk Terlaris Sementara */}
          <Link to="/DetailProduct">
            <div className="flex flex-wrap gap-3 jusify-start py-5 m-6">
              {terlaris.map(data => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Produk Terlaris */}
          {/* UMKM */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4 ml-5">
                Produk UMKM
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <Link to="/ProductPage">
                <p className="text-right text-primary1 text-lg font-medium py-4 mr-5">
                  Lihat lainnya
                </p>
              </Link>
            </div>
          </div>
          {/* Produk UMKM Sementara */}
          <Link to="/DetailProduct">
            <div className="flex flex-wrap gap-3 justify-between py-5 m-6">
              {limitedData2.map(data => (
                <ProductCard key={data.id} {...data} />
              ))}
            </div>
          </Link>
          {/* Akhir Produk UMKM */}
          {/* Berita Desa */}
          <div className="flex justify-between pt-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold dark:text-white py-4 ml-5">
                Berita Desa
              </h1>
            </div>
            <div className="w-1/2 flex justify-end">
              <Link to="/NewsPage">
                <p className="text-right text-primary1 text-lg font-medium py-4 mr-5">
                  Lihat lainnya
                </p>
              </Link>
            </div>
          </div>
          {/* Berita Desa Sementara */}
          <div className="flex flex-wrap gap-3 justify-between py-5 m-6">
            <Link to="/DetailBerita">
              <NewsCard
                img={images.news1}
                title="Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022"
                description="Desa Sekarpura"
              />
            </Link>
            <NewsCard
              img={images.news2}
              title="Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022"
              description="Desa Sekarpura"
            />
            <NewsCard
              img={images.news2}
              title="Penilaian Evaluasi Perkemangan Desa/Lomba Desa Tingkat Kabupaten Bandung T.A 2022"
              description="Desa Sekarpura"
            />
          </div>
          {/* Berita Desa End */}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
