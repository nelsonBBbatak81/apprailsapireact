import React from 'react';

function Label({ value }) {
  return (
    <>
      <label
        htmlFor={value}
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {value}
      </label>
    </>
  );
}

export default Label;
