import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../assets/img/index';

const Dashboard = () => (
  <main className="flex flex-col m-4 w-full">
    <section className="my-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Patient Portal Dashboard</h1>
      <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
    </section>
    <section className="flex justify-start items-center my-6">
      <img className="border rounded-full mr-4" src={profile} alt="profile" />
      <h2 className="text-xl font-bold">Full Name</h2>
    </section>
    <section className="my-6">
      <h2 className="text-xl font-bold my-4">Recent Providers</h2>
      <article className="flex flex-col md:flex-row justify-start items-center border p-4 rounded-md mb-4">
        <img className="rounded-md border w-24 border mr-4" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fdoctor-mike-2.jpg&f=1&nofb=1&ipt=9a6b996c8f8b3487f33cab136fe2b0589af7f8c0ba4572856f207311802d0bf8&ipo=images" alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Jamie Smith, MD</h2>
          </Link>
          <p>Mountain Dermatology Center</p>
        </div>
      </article>
      <article className="flex flex-col md:flex-row justify-start items-center border p-4 rounded-md mb-4">
        <img className="rounded-md border w-24 border mr-4" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fdoctor-mike-2.jpg&f=1&nofb=1&ipt=9a6b996c8f8b3487f33cab136fe2b0589af7f8c0ba4572856f207311802d0bf8&ipo=images" alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Jamie Smith, MD</h2>
          </Link>
          <p>Mountain Dermatology Center</p>
        </div>
      </article>
      <article className="flex flex-col md:flex-row justify-start items-center border p-4 rounded-md mb-4">
        <img className="rounded-md border w-24 border mr-4" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thefamouspeople.com%2Fprofiles%2Fimages%2Fdoctor-mike-2.jpg&f=1&nofb=1&ipt=9a6b996c8f8b3487f33cab136fe2b0589af7f8c0ba4572856f207311802d0bf8&ipo=images" alt="profile" />
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:w-3/4 md:mr-4">
          {/* The link redirect to the Chat of the specefic provider (change it later) */}
          <Link to="/messanger/1">
            <h2 className="text-xl font-bold hover:underline">Jamie Smith, MD</h2>
          </Link>
          <p>Mountain Dermatology Center</p>
        </div>
      </article>
    </section>
    <section className="my-6 w-full">
      <h2 className="text-xl font-bold my-4">Appointments</h2>
      <div className="overflow-x-scroll w-96 md:w-full">
        <table className="w-full border">
          <thead>
            <tr className="border appointments-cell">
              <th className="border">Date</th>
              <th className="border">Time</th>
              <th className="border">Type</th>
              <th className="border">Provider</th>
              <th className="border">Location</th>
              <th className="border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
            <tr className="appointments-cell">
              <td className="">12/12/2020</td>
              <td className="">12:00 PM</td>
              <td className="">Video Call - Follow Up</td>
              <td className="">Jamie Smith, MD</td>
              <td className="">New York, US</td>
              <td className="">Past</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
);
export default Dashboard;
