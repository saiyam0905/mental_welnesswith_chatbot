import React from 'react';

function Services() {
  return (
    <>
      <div id="services-section" className='bg-customColor h-[400px]'>
        <h1 className='font-bold font-serif text-center text-3xl md:text-4xl mt-8'>Our Services</h1>
        <h2 className='text-blue-900 font-bold font-sans text-lg md:text-xl px-6 md:px-16 mt-4 md:mt-6'>We are a mental health ecosystem that brings together multiple treatment options to create an experience that makes getting help easy and seamless. From assessment to treatment, we’re with you every step of the way.</h2>
        <div className='flex flex-col md:flex-row items-center justify-center mt-4 md:mt-6'>
          <img src="https://i.imgur.com/zUYUIcA.png" alt="photo5" className='h-auto max-h-[8rem] md:max-h-[10rem] mr-0 md:mr-6 mb-4 md:mb-0' />
          <div>
            <h1 className='font-bold font-serif text-lg md:text-2xl mb-2 px-60'>Therapy and Psychiatry</h1>
            <h2 className='text-blue-900 font-bold font-sans text-lg md:text-xl text-center md:text-left'>Our in-house team of mental health therapists and psychiatrists is highly qualified and trained to deliver quality and compassionate clinical treatment. Our team follows proprietary clinical protocols & undergoes peer supervision to ensure each individual gets exceptional care, either online or in person.</h2>
            <button className="bg-gray-600 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-8 text-center">Get started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
