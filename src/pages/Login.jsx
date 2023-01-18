import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="flex justify-center items-center w-full py-28">
    <section className="rounded flex flex-col border border-[#111827] lg:w-1/3 w-4/5 m-4 p-4">
      <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
        <h1 className="font-bold text-2xl my-2">Login to your account</h1>
        <p>Enter your email and password to login</p>
      </div>
      <form className="flex flex-col my-4">
        <label className="text-[#374151]" htmlFor="email">
          Email address
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
        <label className="text-[#374151]" htmlFor="password">
          Password
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="password" id="password" placeholder="**************" />
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

export default Login;
