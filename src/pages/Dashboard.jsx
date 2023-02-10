import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { profile } from '../assets/img/index';
import { userName } from '../constants';
import { getRecovery } from '../redux/slice/recovery';

const Dashboard = () => {
  const dispatch = useDispatch();
  const recovery = useSelector((state) => state.recovery.recovery);

  useEffect(() => {
    document.title = 'Dashboard';
    dispatch(getRecovery());
  }, []);
  
  return (
    <main className="flex flex-col p-4 w-full">
      <section className="my-6 xl:ml-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Patient Portal Dashboard</h1>
        <p>Your secure, online, healthcare tracking site. Helping you manage your personal health information with your practices, anytime and anywhere.</p>
      </section>
      <section className="flex justify-start items-center my-6 xl:ml-6">
        <img className="border rounded-full mr-4" src={profile} alt="profile" />
        <h2 className="text-xl font-bold">{userName}</h2>
      </section>
      <section className="my-6 xl:ml-6">
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
      </section>
      <section className="my-6 xl:ml-6">
        <h2 className="text-xl font-bold my-4">Appointments</h2>
        <div className="overflow-x-scroll">
          <table className="border w-full">
            <thead>
              <tr className="border appointments-cell">
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Date
                </th>
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Time
                </th>
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Type
                </th>
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Provider
                </th>
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Location
                </th>
                <th className="border cursor-pointer">
                  <i className="fas fa-arrow-up-wide-short"></i> Status
                </th>
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
            </tbody>
          </table>
        </div>
      </section>
      <article className="my-6 xl:ml-6">
        <h2 className="text-xl font-bold">Recovery Instructions</h2>
        <ul className={'flex flex-col justify-center items-center rounded-xl min-h-full w-full'}>
          {recovery.length === 0
            ? 'No tasks for today check next week todos'
            : recovery.map((item) => (
                <li key={item.id} className="w-full my-2 hover:underline bg-light rounded-md text-left border borger-dark font-bold">
                  <button className="w-full p-4 hover:underline text-left">{item.tracker}</button>
                </li>
              ))}
        </ul>
      </article>
    </main>
  );
};
export default Dashboard;
