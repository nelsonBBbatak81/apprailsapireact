import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dropdown from './Dropdown';
import useAuth from '../hooks/auth';

function Navigation() {
  const isLoggIn = useSelector((state) => state.user.isLoggIn);
  const user = useSelector((state) => state.user.user);
  const { signOut } = useAuth();

  const logout = () => {
    signOut();
  };

  return (
    <>
      <nav class="bg-slate-900 relative select-none bg-grey lg:flex lg:items-stretch w-full">
        <div class="flex flex-no-shrink items-stretch h-12">
          <Link
            to="/"
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-100 hover:text-green-500"
          >
            Tailwind
          </Link>

          <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <Link
              to="/"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
            >
              About
            </Link>
            <Link
              to="/about"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
            >
              Product
            </Link>
            <Link
              to="/about"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
            >
              Cart
            </Link>
            {!isLoggIn && (
              <>
                <Link
                  to="/signin"
                  class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-slate-300 hover:text-green-500"
                >
                  Sign Up
                </Link>
              </>
            )}
            {isLoggIn && (
              <div className="flex items-center py-2 px-4">
                <Dropdown user={user} logout={logout} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
