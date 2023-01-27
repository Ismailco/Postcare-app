import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../assets/img';

const Chat = () => {
  return (
    <main className="flex mb-10 justify-between items-center flex-col w-full h-screen">
      <section className="px-9 flex justify-between items-center w-full bg-white h-20 border-b border-dark/20">
        <Link to="/messanger">
          <i className="fas fa-angle-left fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70"></i>
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-sm text-[#666668]">Active now</p>
        </div>
        <i className="far fa-video fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
      </section>
      <section className="my-6 w-full h-full flex flex-col">
        <p className="text-center text-white">8/20/2022</p>
        <div className="pation-message py-2 mx-2 flex flex-row-reverse justify-start items-start text-white">
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="mr-2 p-2 bg-[#007aff] rounded-xl flex flex-col">
            <p className="">Labore et dolore magna aliqua.</p>
            <p className="self-end text-white/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
        <div className="pation-message py-2 mx-2 flex flex-row-reverse justify-start items-start text-white">
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="mr-2 p-2 bg-[#007aff] rounded-xl flex flex-col">
            <p className="">Duis aute irure dolor inereprehenderit in voluptate.</p>
            <p className="self-end text-white/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
        <div className="prov-message py-2 mx-2 flex justify-start items-start items-start max-w-xs md:max-w-xl">
          <img src={profile} alt="profile" className="w-8 h-8 rounded-full" />
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="ml-2 p-2 bg-light rounded-xl flex flex-col">
            <p className="">Sed ut perspiciatis omnis?</p>
            <p className="self-end text-black/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
        <div className="pation-message py-2 mx-2 flex flex-row-reverse justify-start items-start text-white">
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="mr-2 p-2 bg-[#007aff] rounded-xl flex flex-col">
            <p className="">Excepteur sint occaecat?</p>
            <p className="self-end text-white/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
        <div className="prov-message py-2 mx-2 flex justify-start items-start items-start max-w-xs md:max-w-xl">
          <img src={profile} alt="profile" className="w-8 h-8 rounded-full" />
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="ml-2 p-2 bg-light rounded-xl flex flex-col">
            <p className="">Nemo enim ipsam voluptatem.</p>
            <p className="self-end text-black/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
        <div className="prov-message py-2 mx-2 flex justify-start items-start items-start max-w-xs md:max-w-xl">
          <img src={profile} alt="profile" className="w-8 h-8 rounded-full" />
          {/* <div className="flex"> */}
          {/* <i className="fas fa-triangle text-light rotate-6 h-4 w-9"></i> */}
          <div className="ml-2 p-2 bg-light rounded-xl flex flex-col">
            <p className="">Excepteur sint occaecat?</p>
            <p className="self-end text-black/70">11:34 PM</p>
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* need some work to break the input into multiple lines */}
      <section className="mb-10 w-[90%] p-6 px-10 rounded-2xl flex justify-between items-center items-end bg-light text[#e5e5ea]">
        <i className="far fa-camera fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
        <input type="text" className="focus:outline-none bg-light w-full px-4 " placeholder="Start typing..." />
        <i className="far fa-paper-plane-top fa-xl cursor-pointer active:text-black/40 text-black hover:text-black/70 active:text-dark"></i>
      </section>
    </main>
  );
};

export default Chat;
