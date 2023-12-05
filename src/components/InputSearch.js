import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const InputSearch = props => {
  const [keyword, setKeyword] = useState("");
  const { onClickValue, width, placeholder } = props;

  return (
    <form className="border h-11 border-gray-300 rounded-lg overflow-hidden flex flex-row">
      <input
        className={`h-full bg-white ${
          width ? width : "w-28"
        } border-r border-gray-300 outline-none px-3`}
        onChange={e => setKeyword(e.target.value)}
        placeholder={placeholder}
      />
      <button
        onClick={e => {
          e.preventDefault();
          onClickValue(keyword);
        }}
        className="flex h-full w-10 bg-primary1 hover:text-white"
        type="submit"
      >
        <MagnifyingGlassIcon className="w-5 mx-auto my-auto" />
      </button>
    </form>
  );
};

export default InputSearch;
