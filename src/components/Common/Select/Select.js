import React from "react";
import Select from 'react-select'

const options = [
    { value: 'travel', label: 'Travel' },
    { value: 'history', label: 'History' },
    { value: 'love', label: 'Love' },
]

const customStyles = {
  container: provided => ({
    ...provided,
    width: "100%"
  })
}

export const Dropdown = ({
  label,
  name,
  value,
  onChange,
  labelClass,
  inputWrapperClass,
  placeholder
}) => {
  return (
    <div className={inputWrapperClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <Select
        styles={customStyles}
        isMulti
        defaultValue={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};
