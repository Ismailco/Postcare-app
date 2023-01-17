import React from 'react';
import { Link } from 'react-router-dom';
import profile_pic from '../assets/img/profile.png';
import { footerLinksThree } from '../constants';

const Signup = () => (
  <div className="flex justify-center items-center w-full py-20">
    <section className="rounded flex flex-col border border-[#111827] lg:w-1/3 w-4/5 m-4 p-4">
      <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
        <h1 className="font-bold text-2xl my-2">Sign up</h1>
        <p>Create an account</p>
      </div>
      <div className="flex justify-center items-center">
        <img className="my-6" src={profile_pic} alt="profile" />
      </div>
      <form className="flex flex-col my-4">
        <label className="text-[#374151]" htmlFor="name">
          Name
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="name" id="name" placeholder="John Smith" />
        <label className="text-[#374151]" htmlFor="email">
          Email address
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
        <label className="text-[#374151]" htmlFor="password">
          Password
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="password" id="password" placeholder="**************" />
        <label className="text-[#374151]" htmlFor="password">
          Confirm Password
        </label>
        <input className="border border-[#111827] p-2 mb-4" type="password" id="password" placeholder="**************" />
        <button className="bg-[#bbb] p-2 my-4 text-white" type="submit">
          Create Account
        </button>
      </form>

      <p className="text-[#374151]">
        By signing up, you agree to our{' '}
        <Link to={footerLinksThree[0].path} className="underline">
          Terms of Conditions
        </Link>{' '}
        and{' '}
        <Link to={footerLinksThree[0].path} className="underline">
          Privacy Policy
        </Link>
      </p>
    </section>
  </div>
);

export default Signup;
