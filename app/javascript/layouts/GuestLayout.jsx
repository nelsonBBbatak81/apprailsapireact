import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Spinner } from '../components';

export default function GuestLayout({ children, isLoading }) {
  return (
    <>
      <div>
        <Navigation />
      </div>
      {isLoading && <Spinner />}
      <div className="container">{children}</div>
    </>
  );
}
