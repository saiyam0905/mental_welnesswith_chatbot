import React from 'react'

function Whywebsite() {
  return (

    <>
    <div className='bg-customColor2 bg-cover min-h-[450px] mt-1'>
                <h1 className='text-white font-serif text-3xl md:text-4xl py-4 text-center'>Why Website?</h1>
                <h2 className='text-white font-sans font-semibold text-xl md:text-2xl text-center mt-2 md:mt-4 mb-8 md:mb-12'>Our platform has the best psychiatrist, therapist, and mental health experts.</h2>

                <div className='flex flex-wrap justify-center md:justify-start px-6 md:px-16'>
                    <div className='pr-2 mb-4 md:mb-0'>
                        <img src="https://i.imgur.com/wWCjv3o.png" alt="tasveer" className='h-auto max-h-[8rem] md:max-h-[10rem] mx-auto md:mx-0' />
                        <h1 className='text-white font-bold text-lg md:text-xl mt-2'>Integral Mental Healthcare</h1>
                    </div>
                    {/* <div className='pr-2 mb-4 md:mb-0'>
                        <img src="https://i.imgur.com/NxAq4nN.png" alt="photo" className='h-auto max-h-[8rem] md:max-h-[10rem] mx-auto md:mx-0' />
                    </div> */}
                    <div className='pr-2 mb-4 md:mb-0'>
                        <img src="https://i.imgur.com/U7qnYlM.png" alt="photo3" className='h-auto max-h-[8rem] md:max-h-[10rem] px-36 md:mx-0' />
                        <h1 className='text-white font-bold text-lg md:text-xl mt-2 px-36'>Personalized Support</h1>
                    </div>
                    <img src="https://i.imgur.com/BjUfDom.png" alt="photo4" className='h-auto max-h-[8rem] md:max-h-[10rem] mx-auto md:mx-70' />
                </div>

                <div className='flex justify-center md:justify-end px-6 md:px-44'>
                    <h1 className='text-white font-serif font-bold mt-2 md:mt-[-10px]'>All Time Services</h1>
                </div>
            </div>

    </>
  );
}

export default Whywebsite;
