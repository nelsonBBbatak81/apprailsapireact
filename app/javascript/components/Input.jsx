import React from 'react';

function Input({ ...rest }) {
  return (
    <>
      <input
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        {...rest}
      />
    </>
  );
}

export default Input;
