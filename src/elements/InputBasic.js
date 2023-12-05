import React from 'react';

const InputBasic = (props) => {
  const {
    value,
    onChangeValue,
    onChange,
    label,
    name,
    type,
    labelWidth,
    placeholder,
    inputWidth,
    disabled,
    showError,
    messageError,
    onClick,
  } = props;
  
  return (
    <div className="flex gap-4 items-center">
      {label && (
        <p
          className={`my-auto ${
            labelWidth ? labelWidth : 'w-full'
          } font-medium text-xl capitalize`}
        >
          {label}
        </p>
      )}

      <div className={`flex-1`}>
        <input
          placeholder={placeholder ? placeholder : '-'}
          disabled={disabled}
          name={name}
          type={type}
          value={value}
          className={`bg-gray-50 w-full rounded-lg h-11 px-4 outline-none border border-gray-300 focus:ring-primary1 focus:border-primary1 font-medium disabled:bg-gray-100`}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            } else {
              onChangeValue(e.target.value);
            }
          }}
          onClick={onClick}
        />
        {showError && <p className="warn-input-error">{messageError}</p>}
      </div>
    </div>
  );
};

export default InputBasic;
