import { useEffect, useState } from "react"
import { getToken, getUserData, setStoreUMKM } from "../../utils/storage"
import fetch from "../../utils/fetch";

export default function UMKMSelectStore() {

  const [store, setStore] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const userData = getUserData();

  const getData = async () => {
    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/store`,
      params: {
        id_umkm: userData.id,
        active_on: 'sukabirus'
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    try {
      const response = await fetch(options);
      if (Array.isArray(response.data)) {
        setStore(response.data);
      } else {
        setStore([]);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-auto max-h-screen grid justify-items-center max-w-full">
      <div className="bg-white h-4/5 w-4/6 z-50 rounded-xl shadow-2xl fixed p-6 mt-28 flex flex-col overflow-auto">
        <h2 className="text-2xl font-semibold text-center items-center text-primary1 mb-4">
          Bumdes Citeureup.
        </h2>
        <h1 className="text-3xl font-semibold text-center items-center mb-4">
          Selamat Datang Kembali, {userData.name}
        </h1>
        <div className="w-full overflow-scroll">
          <div className="flex flex-row justify-center overflow-x-scroll py-7 min-w-screen w-max space-x-3 mx-auto">
            {store.map((store, i) => {
              const userStore = store.id;
              const setStore = () => {
                setStoreUMKM(userStore);
                localStorage.setItem("store_data", JSON.stringify(store));
                window.location = "/DashboardUMKM"
              }
              return (
                <div
                  className="border-2 border-gray-300 min-w-[300px] min-h-[350px] bg-gray rounded-lg flex flex-col hover:bg-gray-100 cursor-pointer mt-28"
                  onClick={setStore}
                >
                  <h3 className="mx-auto font-normal mt-4">
                    Usaha {i + 1}
                  </h3>
                  <div className="mx-auto my-auto">
                    <img className="rounded-full w-36 h-36 border-2 border-gray-200" src={store.url_image} ></img>
                  </div>
                  <h3 className="mx-auto mb-7 font-semibold">
                    {store.name}
                  </h3>
                </div>
              )
            }
            )
            }
          </div>
        </div>
      </div>
      <div className="bg-primary1 w-screen h-screen z-10 fixed"></div>
      <div className="bg-white rounded-full h-[2500px] w-[3000px] fixed z-20 mt-[700px] mx-auto"></div>
    </div>
  )
}