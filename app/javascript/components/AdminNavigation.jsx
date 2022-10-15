import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

function AdminNavigation() {
  const { signOut } = useAuth();

  const logout = () => {
    signOut();
  };

  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-center items-center px-3 py-5">
          <Link className="cursor-pointer" to="/">
            <img
              src="/assets/logo.png"
              alt="Image Logo"
              className="w-16 h-16 rounded-full"
            />
          </Link>
          <p className="text-lg font-bold text-white mt-2">
            www.computer-shop.com
          </p>
        </div>
        <div className="flex flex-col">
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/admin/home"
          >
            Home
          </Link>
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/admin/category"
          >
            Category
          </Link>
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/"
          >
            Brand
          </Link>
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/"
          >
            Color
          </Link>
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/"
          >
            Size
          </Link>
          <Link
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
            to="/"
          >
            Product
          </Link>
          <a
            onClick={() => logout()}
            className="w-full px-2 py-2 text-white text-md font-bold hover:bg-slate-400 hover:text-black"
          >
            Sign Out
          </a>
        </div>
      </div>
    </>
  );
}

export default AdminNavigation;
