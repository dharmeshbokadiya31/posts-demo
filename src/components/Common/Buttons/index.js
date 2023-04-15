import React from "react";
import ButtonLoader from "../Loader/buttonLoader";

export const PrimaryButton = ({ title, type, onClick, disabled = false, loading = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      className={`rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
    >
      {loading && <ButtonLoader />}
      {title}
    </button>
  );
};

export const SecondaryButton = ({ title, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-md border border-transparent border-indigo-500 hover:bg-indigo-500 bg-transparent text-indigo-500 hover:text-white transition py-2 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2"
    >
      {title}
    </button>
  );
};

export const SubmitButton = ({ title, type, onClick, disabled = false, loading = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-red-500 font-bold uppercase px-6 py-2 text-sm border-solid  border-1 border-black mr-1 mb-1 ${className}`}
    >
      {loading && <ButtonLoader />}
      {title}
    </button>
  );
};

export const TableButton = ({ onClick, className, type, title }) => {
  return (
    <button
      className={`text-${className}-500 hover:text-red-700`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
