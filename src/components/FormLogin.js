import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserData, setToken } from "../utils/storage";
import InputBasic from "../elements/InputBasic";
import InputPassword from "../elements/InputPassword";
import ButtonSubmit from "./ButtonSubmit";
import Loading from "../elements/Spinner";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [buttonContent, setButtonContent] = useState("Masuk");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitLogin = async () => {
    setIsLoading(true);
    try {
      setLoginMessage("");

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        {
          email: username,
          password: password,
          active_on: 'citeureup'
        }
      );

      const userData = response.data.data.user;
      const level = userData.level;
      setUserData(userData);
      setToken(response.data.data.access_token);

      if (level === "BUMDES") {
        setButtonContent("Selamat Datang!");
        navigate("/Dashboard");
      } else if (level === "UMKM") {
        setButtonContent("Selamat Datang!");
        navigate("/UMKMSelectStore");
      }
    } catch (error) {
      setLoginMessage("Email or password is incorrect.");
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-white object-center rounded-3xl border-2 border-primary3-100 p-4 md:p-8 w-[350px] sm:w-[440px] sm:w-[530px] sm:w-[550px] sm:w-[640px]  md:w-full lg:w-full xl:w-full 2xl:w-full">
      <h2 className="text-3xl font-semibold text-center items-center text-primary1 mb-4">
        Bumdes Citeureup.
      </h2>
      <h2 className="text-2xl font-semibold mb-2">Selamat datang kembali</h2>
      <p className="font-medium text-lg text-primary3 md:text-xl mb-6">
        Masuk sebagai BUMDES atau UMKM
      </p>
      <div className="mt-4 md:mt-8">
        <div>
          <label className="text-base font-medium px-2 mb-1">
            Email atau username
          </label>
          <InputBasic
            placeholder="Masukkan Email atau Username"
            onChangeValue={value => {
              setUsername(value);
            }}
          />
        </div>

        <div>
          <label className="text-base text-lg font-medium px-2 mb-1">
            Password
          </label>
          <InputPassword
            placeholder="Masukkan Password"
            onChange={value => {
              setPassword(value.target.value);
            }}
          />
        </div>

        {loginMessage && (
          <p className="text-red-500 text-sm mt-2">{loginMessage}</p>
        )}

        <div className="mt-4 md:mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 font-medium text-base" htmlFor="remember">
              Ingatkan saya
            </label>
          </div>
          <button className="font-medium text-base text-primary1">
            Lupa kata sandi?
          </button>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col gap-y-4">
          <ButtonSubmit label={isLoading ? <Loading /> : buttonContent} onClick={submitLogin} />
        </div>
      </div>
    </div>
  );
}
