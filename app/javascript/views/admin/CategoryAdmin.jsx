import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { ListCategory } from '../../components';

export default function CategoryAdmin() {
  return (
    <AdminLayout>
      {/* Show List Category */}
      <ListCategory />
    </AdminLayout>
  );
}
