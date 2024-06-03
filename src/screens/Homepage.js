import React from 'react';

function Homepage() {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-customColor">
                <div className="flex-1">
                    <div className="px-6 py-12 md:px-16 md:py-32">
                        <h1 className='text-blue-900 font-extrabold text-4xl md:text-5xl mb-4 md:mb-6'>YOUR MENTAL HEALTH</h1>
                        <h2 className='text-blue-900 font-extrabold text-3xl md:text-4xl mb-4 md:mb-6'>IS OUR PRIORITY</h2>
                        <p className='text-blue-900 text-lg md:text-xl mb-4 md:mb-6 font-semibold'>Our mission is simple: to help you feel better, get better, and stay better.</p>
                        <p className='text-blue-900 text-lg md:text-xl mb-4 md:mb-6 font-semibold'>We bring together self-care, support from qualified therapists and psychiatrists, as well as community access to deliver the best quality mental healthcare for your needs.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.imgur.com/SGxbvC8.jpg" alt="photo" className='h-auto max-h-screen' />
                </div>
            </div>

           
            
        </>
    );
}

export default Homepage;
