import React from 'react';

function Button({ classes, value, ...rest }) {
  return (
    <>
      <button
        className={`hover:shadow-form rounded-md ${classes} py-3 px-8 text-base font-semibold text-white outline-none`}
        {...rest}
      >
        {value}
      </button>
    </>
  );
}

export default Button;
