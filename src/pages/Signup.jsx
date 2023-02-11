import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../app/api';
import profile_pic from '../assets/img/profile.png';
import { footerLinksThree, url } from '../constants';

const Signup = () => {
  const [passValid, setPassValid] = useState(true);
  const [passLength, setPassLength] = useState(true);
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

    if (password.value === passwordConfirmation.value && password.value.length > 7) {
      setPassValid(true);
      setPassLength(true);
      axios
        .post('register', data)
        .then(() => {
          navigate('/login');
        })
        .catch((err) => {
          throw new Error(err);
        });
    }

    // Password validation check (it could be improved)
    if (password.value !== passwordConfirmation.value) {
      setPassValid(false);
      console.log('Mismatch');
    } else {
      setPassValid(true);
    }
    if (password.value.length < 8) {
      setPassLength(false);
      console.log('invalid length');
    } else {
      setPassLength(true);
    }
  };

  useEffect(() => {
    document.title = 'Signup';
    const token = localStorage.getItem('token');
    if (token && token !== 'null') {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="flex justify-center items-start w-full py-10 min-h-[calc(100vh-(18rem+81px))]">
      <section className="rounded-md flex flex-col border border-2 border-primary md:w-1/2 xl:w-1/3 w-96 m-4 p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl my-2">Sign up</h1>
          <p>Create an account</p>
        </div>
        <div className="flex justify-center items-center">
          <img className="my-6" src={profile_pic} alt="profile" />
        </div>
        <form className="flex flex-col my-2" onSubmit={(e) => handleSubmit(e)}>
          <label className="text-[#374151]" htmlFor="firstName">
            First Name
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="name" id="firstName" placeholder="John" />
          <label className="text-[#374151]" htmlFor="lastName">
            Last Name
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="name" id="lastName" placeholder="Smith" />
          <label className="text-[#374151]" htmlFor="email">
            Email address
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="email" id="email" placeholder="example@gmail.com" />
          <label className="text-[#374151]" htmlFor="password">
            Password
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="password" id="password" placeholder="**************" />
          <label className="text-[#374151]" htmlFor="passwordConfirmation">
            Confirm Password
          </label>
          <input required className="border border-[#111827] rounded-md p-2 mb-4" type="password" id="passwordConfirmation" placeholder="**************" />
          <p className={`${passValid ? 'hidden' : 'block'} text-accent-100`}>
            <i className="fas fa-circle-small fa-sm pr-2"></i>Password and password confirmation do not match
          </p>
          <p className={`${passLength ? 'hidden' : 'block'} text-accent-100`}>
            <i className="fas fa-circle-small fa-sm pr-2"></i>The password must be at least 8 characters.
          </p>
          <button className="bg-primary rounded-full font-bold p-2 mt-4 text-white" type="submit">
            CREATE ACCOUNT
          </button>
        </form>

        <p className="text-[#374151]">
          By signing up, you agree to our{' '}
          <Link to={footerLinksThree[0].path} className="underline text-[#46b2e0]">
            Terms of Conditions
          </Link>{' '}
          and{' '}
          <Link to={footerLinksThree[0].path} className="underline text-[#46b2e0]">
            Privacy Policy
          </Link>
        </p>
      </section>
    </div>
  );
};
export default Signup;
