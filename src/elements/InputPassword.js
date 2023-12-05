import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const InputPassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { placeholder, id, name, autoComplete, value, onChange } = props;

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <input
          id={id}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className="bg-gray-50 w-full h-11 px-4 outline-none font-medium"
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
        />
        {!showPassword ? (
          <EyeIcon
            className="w-6 h-6 mx-2 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <EyeSlashIcon
            className="w-6 h-6 mx-2 text-gray-400 cursor-pointer hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
    </div>
  );
};

export default InputPassword;
