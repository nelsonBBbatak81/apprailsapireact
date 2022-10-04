import React, { useState } from 'react';
import { Input, Label, Button } from '../components';
import GuestLayout from '../layouts/GuestLayout';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password_confirmation, setPasswordConfirmation] = useState(null);

  return (
    <GuestLayout>
      <div className="py-20 max-w-md mx-auto">
        <h1 className="text-xl font-bold text-center mb-6">Please Sign Up</h1>
        <form action="">
          <div className="mb-4">
            <Label value="Email" />
            <Input
              type="email"
              value={email}
              onChange={() => setEmail(e.target.value)}
              placeholder="Fill your email .."
            />
          </div>
          <div className="mb-4">
            <Label value="Password" />
            <Input
              type="password"
              value={password}
              onChange={() => setPassword(e.target.value)}
              placeholder="Fill your password .."
            />
          </div>
          <div className="mb-4">
            <Label value="Password Confirmation" />
            <Input
              type="password"
              value={password_confirmation}
              onChange={() => setPasswordConfirmation(e.target.value)}
              placeholder="Fill your password again.."
            />
          </div>
          <Button value="Submit" classes="w-full bg-blue-600" type="submit" />
        </form>
        <div className="mt-6 flex justify-center">
          <p className="text-md font-semibold mr-3">
            If you already have any account, please
          </p>
          <Link
            to="/signin"
            className="text-md text-blue-400 no-underline hover:text-blue-600"
          >
            Log In
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
