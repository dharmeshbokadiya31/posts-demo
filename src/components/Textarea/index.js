import React from "react";

export const Textarea = ({
  label,
  type,
  name,
  value,
  autoComplete,
  required,
  placeholder,
  className,
  onChange,
  labelClass,
  inputWrapperClass
}) => {
  return (
    <div className={inputWrapperClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        value={value}
        className={`${className} relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
        placeholder={placeholder}
        rows={5}
      />
    </div>
  );
};
