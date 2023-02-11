import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../app/api';
import { loading } from '../assets/img';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, btn } = e.target.elements;
    
    const error = document.querySelector('.error');
    const loading = document.querySelector('.loading-circle');
    error.classList.add('hidden');
    btn.disabled = true;

    const data = {
      email: email.value,
      password: password.value,
    };

    if (password.value.length !== 0 && email.value.length !== 0) {
      loading.classList.remove('hidden');
      axios
        .post('login', data)
        .then((res) => {
          if (res.status) {
            localStorage.setItem('user', JSON.stringify(res.data.data.patient));
            localStorage.setItem('token', JSON.stringify(res.data.data.token));
            localStorage.setItem('streamToken', JSON.stringify(res.data.data.stream_token));
          } else {
            console.log(res.errors);
          }
        })
        .then(() => {
          loading.classList.add('hidden');
          window.location.href = '/dashboard';
        })
        .catch((err) => {
          loading.classList.add('hidden');
          error.classList.remove('hidden');
          btn.disabled = false;
          throw new Error(err);
        });
    }
  };

  useEffect(() => {
    document.title = 'Login';
    const token = localStorage.getItem('token');
    if (token && token !== 'null') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="flex justify-center items-start w-full py-10 min-h-[calc(100vh-(18rem+81px))]">
      <img src={loading} alt="loading" className="loading-circle w-40 h-40 text-center absolute top-60 hidden" />
      <section className="rounded-md flex flex-col border border-2 border-primary md:w-1/2 xl:w-1/3 w-96 m-4 p-4">
        <p className="error text-center font-bold bg-red-300 rounded-xl p-2 w-full hidden">Invalid Email or Password</p>
        <div className="flex flex-col justify-center items-center my-4">
          <h1 className="font-bold text-2xl mb-1">Login to your account</h1>
          <p>Enter your email and password to login</p>
        </div>
        <form className="flex flex-col my-2 on" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-[#374151]" htmlFor="email">
            Email address
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
          <label className="text-[#374151]" htmlFor="password">
            Password
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="password" id="password" placeholder="**************" minLength="8" />
          <button id="btn" className="bg-primary rounded-full p-2 mt-4 font-bold text-white disabled:bg-dark" type="submit">
            LOGIN
          </button>
        </form>
        <p className="text-center my-4">
          <span className="text-[#6B7280]">Don't have an account?</span>{' '}
          <Link to="/signup" className="text-[#46b2e0]">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
