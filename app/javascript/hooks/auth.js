import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, removeUser, getAuth, removeAuth } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [token, setToken] = useState(
    document.querySelector("meta[name='csrf-token']").getAttribute('content')
  );
  const dispatch = useDispatch();

  const login = async ({ setErrors, ...props }) => {
    setLoading(true);
    setErrors([]);
    console.log(props);
    await axios
      .post('/auth/sign_in', props, {
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
      })
      .then((res) => {
        setLoading(false);
        localStorage.setItem('access-token', res.headers['access-token']);
        localStorage.setItem('client', res.headers['client']);
        localStorage.setItem('uid', res.headers['uid']);
        localStorage.setItem('token', res.headers['access-token']);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        dispatch(setUser(res.data.data));
        dispatch(getAuth(true));
        console.log(res);
        navigate('/admin/home');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response.status == 500) throw alert('Connection server fail!');
        // if (error.response.status != 422) throw error;
        setErrors(Object.values(err.response.data.errors).flat());
      });
  };

  const register = async ({ setErrors, ...props }) => {
    setLoading(true);
    setErrors([]);
    console.log(props);
    await axios
      .post('/auth', props, {
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        localStorage.setItem('access-token', res.headers['access-token']);
        localStorage.setItem('client', res.headers['client']);
        localStorage.setItem('uid', res.headers['uid']);
        localStorage.setItem('token', res.headers['access-token']);
        localStorage.setItem('user', JSON.stringify(res.data.data));
        dispatch(setUser(res.data.data));
        dispatch(getAuth(true));
        navigate('/admin/home');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response.status == 500) throw alert('Connection server fail!');
        // if (error.response.status != 422) throw error;
        setErrors(Object.values(err.response.data.errors).flat());
      });
  };

  const signOut = async () => {
    setLoading(true);
    let uid = localStorage.getItem('uid');
    let client = localStorage.getItem('client');
    let accessToken = localStorage.getItem('access-token');
    await axios
      .delete('/auth/sign_out', {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token,
          client: client,
          uid: uid,
          'access-token': accessToken,
        },
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(removeUser());
        dispatch(removeAuth());
        navigate('/signin');
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return {
    isLoading,
    login,
    register,
    signOut,
  };
}
