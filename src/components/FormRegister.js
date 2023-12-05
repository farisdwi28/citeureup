import * as React from "react";
import { images } from "../constans";

export default function FormRegister() {
  return (
    <div className="bg-white object-center rounded-3xl border-2 border-primary3-100 px-8 py-8">
      <h2 className="text-3xl font-semibold text-center items-center text-primary1">
        Bumdes Citeureup.
      </h2>
      <h2 className="text-2xl font-semibold">Selamat datang kembali</h2>
      <p>Daftar akun hanya diperuntukan BUMDES</p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium px-2">Email</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent" />
        </div>

        <div>
          <label className="text-lg font-medium px-2">Kata Sandi</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent" />
        </div>

        <div>
          <label className="text-lg font-medium px-2">Ulang Kata Sandi</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-2 bg-transparent" />
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label className="ml-2 font-medium text-base" for="remember">
              Ingatkan saya
            </label>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-primary1 text-white text-lg font-bold">
            Daftar
          </button>
          <button className="flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <img src={images.google} className="w-8 h-8" />
            <span className="align-middle">Daftar dengan Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
