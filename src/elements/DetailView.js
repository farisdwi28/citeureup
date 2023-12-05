import React from 'react';

const DetailView = (props) => {
  const { value, onChangeValue, label, name, type, placeholder } = props;
  return (
    <div className="flex font-montserrat gap-4 items-center py-2">
      <p className="my-auto w-[200px] font-medium text-xl capitalize w-64 mr-10">{label}</p>
      <p className="w-full rounded-lg h-10 px-3 font-medium bg-gray-50">{value}</p>
    </div>
  );
};

export default DetailView;