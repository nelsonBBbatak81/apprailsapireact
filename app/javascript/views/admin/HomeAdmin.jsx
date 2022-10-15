import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useSelector } from 'react-redux';

export default function HomeAdmin() {
  const user = useSelector((state) => state.user.user);

  return (
    <AdminLayout>
      <div className="px-2 py-5">
        <h1 className="text-md font-bold">Welcome {user.email}</h1>
      </div>
    </AdminLayout>
  );
}
