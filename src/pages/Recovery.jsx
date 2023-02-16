import React from 'react';

const Recovery = () => {
  const title = '⚕️ Medical Care Instructions';
  const details = ['Use your prescription pain medication "narcotic" or "non-narcotic" as directed on the prescription', 'DO NOT take additional Tylenol (acetaminophen) if your pain medication has Tylenol (acetaminophen) in it.', 'You may take ibuprofen 200 mg tablets: 800mg total every 8 hours OR Aleve (Naproxen) 1 tablet every 12 hours as needed along with your narcotic.', 'Use ice to decrease the swelling: Wrap a zip lock bag of ice in a cloth or towel and place it on and off your incision every 15-30 minutes as needed for the first 2 days. It will help decrease inflammation.'];

  return (
    <section className="main flex flex-col p-4 mt-10 w-full">
      <h1 className="text-2xl font-bold mb-2">Recovery Instructions</h1>
      <h2 className="text-xl font-bold mb-10">{title}</h2>
      <div className="flex flex-col items-center rounded border p-16 w-full">
        <ul className="list-disc ">
          {details.map((item, i) => (
            <li key={i} className="text-left">
              <p className="">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Recovery;
