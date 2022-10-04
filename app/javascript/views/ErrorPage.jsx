import React from 'react';
import { useRouteError } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <GuestLayout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </GuestLayout>
  );
}
