import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components';

export default function GuestLayout({ children }) {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <div className="container">{children}</div>
    </>
  );
}
