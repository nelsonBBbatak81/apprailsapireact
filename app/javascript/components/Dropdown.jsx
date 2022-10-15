import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ user, logout }) {
  const [isOpen, setOpen] = useState(false);

  const handleCloseDropdown = () => {
    if (!isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="relative inline-block">
          <button
            onClick={() => handleCloseDropdown()}
            className="relative z-10 flex items-center py-2 px-4 leading-normal text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          >
            <span className="mx-1">{user.email}</span>
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl transition-all dark:bg-gray-800">
              <a
                href="#"
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <img
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                  alt="jane avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Jane Doe
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    janedoe@exampl.com
                  </p>
                </div>
              </a>

              <hr className="border-gray-200 dark:border-gray-700 " />

              <Link
                to="/admin/home"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Admin
              </Link>
              <hr className="border-gray-200 dark:border-gray-700 " />

              <a
                onClick={() => logout()}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
