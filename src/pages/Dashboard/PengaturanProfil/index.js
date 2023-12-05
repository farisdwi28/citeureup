import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@material-tailwind/react";
import { images } from "../../../constans";
import ButtonSubmit from "../../../components/ButtonSubmit";
import { getToken, getUserData } from "../../../utils/storage";
import fetch from "../../../utils/fetch";
import { CameraIcon } from "@heroicons/react/24/solid";

const Profil = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [loadingProfil, setLoadingProfil] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [passwordButtonContent, setPasswordButon] = useState("Update Password");
  const [akunData, setAkunData] = useState({});

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const [adminData, setAdminData] = useState({
    id_bumdes_umkm: "",
    name: "",
    address: "",
    phone: "",
    file: ""
  });

  // const fetchEmail = async () => {
  //   const token = getToken();
  //   const userData = getUserData();
  //   const options = {
  //     method: "GET",
  //     url: `${process.env.REACT_APP_API_URL}/user/detail/${userData.id}`,
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   };

  //   try {
  //     const response = await fetch(options);
  //     setAkunData(response.data);
  //   } catch (error) {
  //     console.error("Terjadi kesalahan saat mengambil email:", error);
  //   }
  // };

  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    const token = getToken();
    setLoadingProfil(true);

    const data = new FormData();
    data.append('id_bumdes_umkm', adminData.id);
    data.append('name', adminData.name);
    data.append('address', adminData.address);
    data.append('phone', adminData.phone);
    if (adminData.file) data.append('file', adminData.file, adminData.file.name);
    data.append('email', adminData.email);
    data.append('password', adminData.password);

    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/bumdes/profil`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': "multipart/form-data"
      },
      data: data
    };

    try {
      const response = await fetch(options);
      console.log("response update profil", {response})
      if (response.error === false) {
        // setPasswordButon("Simpan");
        window.location.reload();
      } else {
        console.error("Gagal memperbarui profil");
      }
      setLoadingProfil(false);
      fetchAdminData();
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui profil:", error);
      setLoadingProfil(false);
    }
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    const token = getToken();
    setLoadingPassword(true);
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user/update/password/${adminData.id}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        old_password: akunData.old_password,
        new_password: akunData.new_password
      }
    };

    try {
      const response = await fetch(options);
      if (response.alerts.code == '400') {
        setPasswordButon(response.alerts.message);
      } else {
        setPasswordButon("Berhasil Update Password");
      }
      setLoadingPassword(false);
    } catch (error) {
      console.error("Terjadi kesalahan saat memperbarui password:", error);
      setLoadingPassword(false);
    }
  };

  const fetchAdminData = async () => {
    const token = getToken();
    const userData = getUserData();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/detail/${userData.id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const response = await fetch(options);
      setAdminData(response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data admin:", error);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  // const handle image upload
  const handleFileChange = event => {
    setAdminData({ ...adminData, ...{ file: event.target.files[0] } })
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-grow flex flex-col justify-center m-4 md:m-32 shadow-xl mt-20">
          {/* pengaturan profile */}
          <div className="relative max-w-full overflow-hidden">
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
                        src={adminData.url_image}
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
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="nama"
                      >
                        Nama Tampilan Bumdes
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="Desa sukabirus"
                        value={adminData.name}
                        onChange={e =>
                          setAdminData({ ...adminData, name: e.target.value })
                        }
                      />
                    </div>
                    {/* alamat bumdes */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="alamat"
                      >
                        Alamat Desa
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="Jalan sukabirus"
                        value={adminData.address}
                        onChange={e =>
                          setAdminData({
                            ...adminData,
                            address: e.target.value
                          })
                        }
                      />
                    </div>
                    {/* kontak bumdes */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="kontak"
                      >
                        Kontak Desa
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="0822249823"
                        value={adminData.phone}
                        onChange={e =>
                          setAdminData({ ...adminData, phone: e.target.value })
                        }
                      />
                    </div>
                    {/* email */}
                    {/* <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="text"
                        placeholder="admin@gmail.com"
                        value={akunData.email}
                        onChange={e =>
                          setAkunData({ ...akunData, email: e.target.value })
                        }
                      />
                    </div> */}
                    <ButtonSubmit
                      label="Update Profile"
                      onClick={handleSubmitProfile}
                      isLoading={loadingProfil}
                    />
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
              <h1 className="text-lg font-semibold text-black">Password</h1>
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
                <div className="w-full mt-8">
                  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* password */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="password"
                      >Password Lama</label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="password"
                        placeholder="Password lama anda..."
                        value={akunData.old_password}
                        onChange={e =>
                          setAkunData({ ...akunData, old_password: e.target.value })
                        }
                      />
                    </div>
                    {/* re-type password */}
                    <div className="mb-4">
                      <label
                        class="block text-gray-700 font-medium text-lg mb-2"
                        for="password"
                      >Password Baru</label>
                      <input
                        className="w-full border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary1"
                        type="password"
                        placeholder="Password baru anda..."
                        value={akunData.new_password}
                        onChange={e =>
                          setAkunData({ ...akunData, new_password: e.target.value })
                        }
                      />
                    </div>
                    <ButtonSubmit
                      label={passwordButtonContent}
                      onClick={handleSubmitPassword}
                      isLoading={loadingPassword}
                      type="button"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;