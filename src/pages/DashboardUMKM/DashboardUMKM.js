import React, { useState, useEffect } from "react";
import SidebarUMKM from "../../components/SidebarUMKM";
import { images } from "../../constans";
import { Button } from "@material-tailwind/react";
import BarChart from "../../components/GraphicChart/BarChart";
import { clearDataLogin, getUserData, getToken } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import fetch from "../../utils/fetch";

const DashboardUMKM = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [totalAll, setTotalAll] = useState({
    data_bar_chart: {
      countedProduct: "-",
      countedViewedStore: "-",
    },
  });

  useEffect(() => {
    getAll(); 
  })

  const handleLogout = () => {
    clearDataLogin();
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getAll = async () => {
    const token = getToken();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/landing-page/umkm/dashboard?active_on=sukabirus`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    try {
      const response = await fetch(options);
      console.log(JSON.stringify(response))
      if (response) {
        setTotalAll(response);
      } else {
        setTotalAll({
          data_bar_chart: {
            countedProduct: "-",
            countedViewedStore: "-",
          },
        });
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  const DummyData4 = [
    {
      id: 9,
      title: "Yanto",
      like: 90,
    },
    {
      id: 10,
      title: "Wawan",
      like: 85,
    },
    {
      id: 11,
      title: "Bakso Aci Nila",
      like: 80,
    },
    {
      id: 12,
      title: "Bakso Aci Pindang",
      like: 75,
    },
    {
      id: 13,
      title: "Bakso Aci Gurame",
      like: 70,
    },
    {
      id: 14,
      title: "Bakso Aci Belut",
      like: 75,
    },
    {
      id: 15,
      title: "Bakso Aci Kodok",
      like: 75,
    },
  ];
  
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-300">
      <SidebarUMKM />
      <main className="flex-grow container mx-auto p-6 py-20">
        <div className="Title">
          <div className="flex justify-between items-center h-auto pb-20">
            <h1 className="font-semibold text-primary1 text-3xl">
              Analisa Statistik
            </h1>
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-800 bg-white border border-none rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                onClick={toggleDropdown}
              >
                <img
                    className="w-8 h-8 rounded-full"
                    src={JSON.parse(localStorage.getItem("store_data")).url_image || images.profil1}
                    alt="-"
                  />
                  <span className="ml-2">{JSON.parse(localStorage.getItem("store_data")).name || "-"}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M6 8l4 4 4-4h-8z" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                  <div className="py-1">
                  <a
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* container 3 dashboard statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* statistik 1 */}
          <div className="bg-white rounded-lg p-6 md:p-8 drop-shadow-xl md:relative">
            <img
              src={images.boxIcon}
              className="w-14 h-auto absolute left-10 top-10 bg-pink-400 bg-opacity-10 rounded-full md:static md:left-auto md:top-auto md:bg-transparent"
            />
            <p className="text-lg text-center font-normal text-slate-500 mb-2">
              Total Produk
            </p>
            <p className="text-2xl text-center font-bold text-slate-500 mb-4">
             {totalAll.data_bar_chart.countedProduct}
            </p>
          </div>
          {/* statistik 2 */}
          <div className="bg-white rounded-lg p-6 md:p-8 drop-shadow-xl md:relative">
            <img
              src={images.viewsIcon}
              className="w-14 h-auto absolute left-10 top-10 md:static md:left-auto md:top-auto bg-pink-400 bg-opacity-10 rounded-full"
            />
            <p className="text-lg text-center font-normal text-slate-500 mb-2">
              Total Pengunjung
            </p>
            <p className="text-2xl text-center font-bold text-slate-500 mb-4">
            {totalAll.data_bar_chart.countedViewedStore}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* statistik top kategori */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">Analisa Sosial Media</h2>
            </div>
            <BarChart />
            <div className="text-center mt-4">
              <Button
                variant="outlined"
                className="text-indigo-500 border-indigo-500"
              >
                View Report
              </Button>
            </div>
          </div>
          {/* statistik rank umkm */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold">Rank Like Terbanyak</h2>
              <p className="text-gray-500 text-sm">
                Terhitung dari 24 Juni 2023
              </p>
            </div>
            {/* rank gold-medal */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-left gap-2">
                <img
                  src={images.goldmedal}
                  className="w-6 h-6"
                  alt="Gold Medal"
                />
                <p>Baso Aci Ikan Nila</p>
              </div>
              <div className="flex items-right gap-2 items-center">
                <img src={images.like} className="w-5 h-4" alt="Like Icon" />
                <p>215</p>
              </div>
            </div>
            {/* rank silver-medal */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-left gap-2">
                <img
                  src={images.silvermedal}
                  className="w-6 h-6"
                  alt="Silver Medal"
                />
                <p>Baso Aci Ikan Nila</p>
              </div>
              <div className="flex items-right gap-2 items-center">
                <img src={images.like} className="w-5 h-4" alt="Like Icon" />
                <p>210</p>
              </div>
            </div>
            {/* rank bronze-medal */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-left gap-2">
                <img
                  src={images.bronzemedal}
                  className="w-6 h-6"
                  alt="Bronze Medal"
                />
                <p>Baso Aci Ikan Nila</p>
              </div>
              <div className="flex items-right gap-2 items-center">
                <img src={images.like} className="w-5 h-4" alt="Like Icon" />
                <p>115</p>
              </div>
            </div>
            {/* rank 4 - 8 */}
            {DummyData4.slice(0, 7).map((data, index) => (
              <div
                className="flex items-center justify-between mb-2"
                key={index}
              >
                <div className="flex items-left gap-2">
                  <p>{index + 4}.</p>
                  <p>{data.title}</p>
                </div>
                <div className="flex items-right gap-2 items-center">
                  <img src={images.like} className="w-5 h-4" alt="Like Icon" />
                  <p>{data.like}</p>
                </div>
              </div>
            ))}
            <div className="text-center mt-4">
              <Button
                variant="outlined"
                className="text-indigo-500 border-indigo-500"
              >
                View Report
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardUMKM;
