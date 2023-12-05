import React from 'react';

const FormBasic = (props) => {
  const { value, onChangeValue, label, name, type, placeholder } = props;
  return (
    <div className="flex font-montserrat gap-4 items-center py-2">
      <p className="my-auto w-[200px] font-medium text-xl capitalize w-64 mr-10">{label}</p>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        className="w-full rounded-lg h-11 px-3 outline-none border border-slate-500 font-medium bg-gray-50"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default FormBasic;