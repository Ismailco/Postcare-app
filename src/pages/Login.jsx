import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../app/api';
import { url } from '../constants';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const data = {
      email: email.value,
      password: password.value,
    };

    if (password.value.length !== 0 && email.value.length !== 0) {
      axios
        .post("login", data)
        .then((data) => {
          if (data.status) {
            localStorage.setItem('user', JSON.stringify(data.data.data.patient));
            localStorage.setItem('token', data.data.data.token);
          } else {
            console.log(data.errors);
          }
        })
        .then(() => {
          navigate('/dashboard');
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'null') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-28">
      <section className="rounded flex flex-col border border-[#111827] lg:w-1/3 w-4/5 m-4 p-4">
        <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
          <h1 className="font-bold text-2xl my-2">Login to your account</h1>
          <p>Enter your email and password to login</p>
        </div>
        <form className="flex flex-col my-4 on" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-[#374151]" htmlFor="email">
            Email address
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
          <label className="text-[#374151]" htmlFor="password">
            Password
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="password" id="password" placeholder="**************" minLength="8" />
          <button className="bg-[#bbb] p-2 my-4 text-white" type="submit">
            Login
          </button>
        </form>

        <p className="text-center">
          <span className="text-[#6B7280]">Don't have an account?</span> <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
