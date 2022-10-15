import React from 'react';
import { Link } from 'react-router-dom';
import { AdminNavigation, Spinner } from '../components';

export default function AdminLayout({ children, isLoading }) {
  return (
    <>
      {isLoading && <Spinner />}
      <div className="flex flex-row">
        <div className="bg-slate-800 w-2/5 px-3 py-5">
          <AdminNavigation />
        </div>
        <div className="bg-slate-100 w-full px-3 py-5">{children}</div>
      </div>
    </>
  );
}
