import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profile_pic from '../assets/img/profile.png';
import { footerLinksThree, url } from '../constants';

const Signup = () => {
  const [passValid, setPassValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, passwordConfirmation } = e.target.elements;

    const data = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    };

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    if (password.value === passwordConfirmation.value) {
      setPassValid(true);
      fetch(`${url}register`, params)
        .then((res) => {
          localStorage.setItem('token', res.headers.get('Authorization'));
          return res.json();
        })
        .then((data) => {
          if (data.status) {
            localStorage.setItem('user', JSON.stringify(data));
          } else {
            alert(data.errors);
          }
        })
        .then(() => {
          navigate('/dashboard');
        })
        .catch((err) => {
          throw new Error(err);
        });
    } else {
      setPassValid(false);
    }
  };
  return (
    <div className="flex justify-center items-center w-full py-20">
      <section className="rounded flex flex-col border border-[#111827] lg:w-1/3 w-4/5 m-4 p-4">
        <div className="flex flex-col justify-center items-center bg-[#F9FAFB]">
          <h1 className="font-bold text-2xl my-2">Sign up</h1>
          <p>Create an account</p>
        </div>
        <div className="flex justify-center items-center">
          <img className="my-6" src={profile_pic} alt="profile" />
        </div>
        <form className="flex flex-col my-4" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-[#374151]" htmlFor="firstName">
            First Name
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="name" id="firstName" placeholder="John" />
          <label className="text-[#374151]" htmlFor="lastName">
            Last Name
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="name" id="lastName" placeholder="Smith" />
          <label className="text-[#374151]" htmlFor="email">
            Email address
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
          <label className="text-[#374151]" htmlFor="password">
            Password
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="password" id="password" placeholder="**************" />
          <label className="text-[#374151]" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input required className="border border-[#111827] p-2 mb-4" type="password" id="passwordConfirmation" placeholder="**************" />
          <p className={`${passValid ? 'hidden' : 'block'} text-accent-100`}>Password and password confirmation do not match</p>
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
};
export default Signup;
