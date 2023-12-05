import React, { useState } from "react";
import ButtonSubmit from "../ButtonSubmit";
import { getToken } from "../../utils/storage";
import FormBasic from "../../elements/FormBasic";
import InputPassword from "../../elements/InputPassword";
import fetch from "../../utils/fetch";
import Loading from "../../elements/Spinner";
const FormAddMitra = () => {
  const [buttonContent, setButtonContent] = useState("Simpan");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState("");

  function refreshPage() {
    window.location.reload(false);
  }

  const [umkmData, setUmkmData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const addData = async (e) => {
    e.preventDefault();
    if (
      !umkmData.name ||
      !umkmData.address ||
      !umkmData.phone ||
      !umkmData.email ||
      !umkmData.password
    ) {
      setAlertMessage("Please fill in all required fields");
      return;
    }

    if (umkmData.password !== umkmData.passwordConfirmation) {
      setAlertMessage("Password and confirmation do not match");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(umkmData.password)) {
      setAlertMessage(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character (!, @, #, $, %, ^, &, *)"
      );
      return;
    }

    const token = getToken();
    setIsLoading(true);
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/auth/signup/owner-umkm`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: umkmData.name,
        address: umkmData.address,
        phone: umkmData.phone,
        email: umkmData.email,
        password: umkmData.password,
        active_on: 'sukabirus'
      },
    };
    try {
      await fetch(options);
      setButtonContent("Sukses Menyimpan!");
      setIsSuccess("Data successfully saved!");
      setTimeout(() => {
        setButtonContent("Simpan");
      }, 2000);
      setUmkmData({
        name: "",
        address: "",
        phone: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
      refreshPage();
    } catch (err) {
      alert(JSON.stringify(err));
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto">
      <div className="m-20">
        <div className="bg-white p-6 md:p-8 border shadow-2xl rounded-xl">
          <h2 className="text-3xl font-semibold text-primary1 my-4 text-center">
            Tambah Mitra UMKM
          </h2>
          {alertMessage && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{alertMessage}</span>
            </div>
          )}
          {isSuccess && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Success: </strong>
              <span className="block sm:inline">{isSuccess}</span>
            </div>
          )}
          <form className="w-full">
            {/* Nama Pemilik */}
            <FormBasic
              label="Nama Pemilik"
              placeholder="Name"
              type="text"
              name="name"
              value={umkmData.name}
              onChangeValue={(value) =>
                setUmkmData({ ...umkmData, name: value })
              }
            />
            {/* Alamat Mitra*/}
            <FormBasic
              label="Alamat Mitra"
              placeholder="Address"
              type="text"
              name="addres"
              value={umkmData.address}
              onChangeValue={(value) =>
                setUmkmData({ ...umkmData, address: value })
              }
            />
            {/* No Telepon */}
            <FormBasic
              label="No Telepon"
              placeholder="Phone"
              type="text"
              name="phone"
              value={umkmData.phone}
              onChangeValue={(value) =>
                setUmkmData({ ...umkmData, phone: value })
              }
            />
            {/* Email */}
            <FormBasic
              label="Email"
              placeholder="Email"
              type="text"
              name="email"
              value={umkmData.email}
              onChangeValue={(value) =>
                setUmkmData({ ...umkmData, email: value })
              }
            />
            {/* kata Sandi */}
            <div className="my-4 flex items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg mr-10 w-64"
              >
                Kata Sandi
              </label>
              <div className="w-full">
                <InputPassword
                  placeholder="Password"
                  name="password"
                  value={umkmData.password}
                  onChange={(event) =>
                    setUmkmData({ ...umkmData, password: event.target.value })
                  }
                />
              </div>
            </div>
            {/* Re-Type Kata Sandi */}
            <div className="my-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block font-medium text-lg  mr-10 w-64"
              >
                Konfirmasi Kata Sandi
              </label>
              <div className="w-full">
                <InputPassword
                  placeholder="Konfirmasi Password"
                  name="passwordConfirmation"
                  value={umkmData.passwordConfirmation}
                  onChange={(event) =>
                    setUmkmData({
                      ...umkmData,
                      passwordConfirmation: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="text-right ml-auto my-4">
              <ButtonSubmit
                label={isLoading ? <Loading /> : buttonContent}
                onClick={addData}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAddMitra;
