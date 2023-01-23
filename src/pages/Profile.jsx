import React from 'react';
import { profile } from '../assets/img/index';
import { userName } from '../constants'

const Profile = () => (
  <main className="flex flex-col p-4">
    <section className="my-6 xl:ml-6">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
    </section>
    <section className="flex justify-start items-center my-6 xl:ml-6">
      <img className="border rounded-full mr-4" src={profile} alt="profile" />
      <h2 className="text-xl font-bold">{userName}</h2>
    </section>
  </main>
);

export default Profile;
