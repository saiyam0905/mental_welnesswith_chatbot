import React from 'react'

 function Page4() {
  return (
    <div className='bg-customColor3 h-[700px] '>

        <h1 className='font-bold font-serif text-3xl px-2 py-4 text-lime-950'>What are you struggling with?</h1>
      <h2 className='font-semibold font-serif text-lg py-2 px-2 text-lime-950'> We are here to help you. </h2>
      <div className='flex justify-between'>

<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Depression</p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Do you feel like your sadness just won't go away, and it is hard to find a way ahead? We can help.
  </h2>
  <button className=' font-semibold text-white bg-slate-500 rounded mx-3 px-2 mb-3 mt-7 hover:text-blue-200'onClick={()=>window.location.href='https://www.who.int/news-room/fact-sheets/detail/depression'} > Learn more -> </button>
</h3>

<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Alcohol Addiction</p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Is your use of alcohol interfering with your ability to lead your life fully? You can find the right support.
  </h2>
  <button className='font-semibold text-white bg-slate-500 rounded mx-3 px-2 mt-7 mb-3 hover:text-blue-200' onClick={()=> window.location.href='https://www.healthline.com/health/addiction/alcohol'}> Learn more -> </button>
</h3>

<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Generalised Anxiety and Disorder (GAD) </p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Do you often feel restless, worried, or on-edge? Let us help you with how to cope better.
  </h2>
  <button className='font-bold text-white bg-slate-500 rounded mx-3 px-2 mb-3 hover:text-blue-200' onClick={()=>window.location.href='https://www.ncbi.nlm.nih.gov/books/NBK441870/#:~:text=Generalized%20anxiety%20disorder%20is%20a,unrealistic%20worry%20about%20everyday%20things'}> Learn more -> </button>
</h3>

</div>


<div className='flex justify-between'>

<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Obsessive Compulsive Disorder(OCD)</p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Are unwanted thoughts making you anxious and engage in unhelpful behaviours? you can find way to cope.
  </h2>
  <button className='font-bold text-white bg-slate-500 rounded mx-3 px-2 mb-3 mt-7 hover:text-blue-200' onClick={()=>window.location.href='https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd#:~:text=Obsessive%2Dcompulsive%20disorder%20(OCD),or%20interfere%20with%20daily%20life'}> Learn more -> </button>
</h3>


<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Bipolar Disorder </p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Do you struggle with period of intense happiness, followed by intense sadness? you can find the care for yourself here.
  </h2>
  <button className='font-bold hover:text-blue-200 text-white bg-slate-500 rounded mx-3 px-2 mb-3 mt-14' onClick={()=>window.location.href='https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd#:~:text=Attention%2Ddeficit%2Fhyperactivity%20disorder%20(,interferes%20with%20functioning%20or%20development'}> Learn more -> </button>
</h3>

<h3 className='box-border h-50 w-1/3 border-4 border-black mx-2 bg-green-800 my-3'>
  <p className='font-bold text-2xl font-serif text-slate-100 px-3'> Adult ADHD</p> 
  <h2 className='text-lg font-sans font-semibold text-slate-100 py-4 px-3'>
    Have you always struggled with the difficulty focusing or paying attention? you can find a way to cope.
  </h2>
  <button className='font-bold hover:text-blue-200 text-white bg-slate-500 rounded mx-3 px-2 mb-3 mt-14'onClick={()=>window.location.href='https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd#:~:text=Attention%2Ddeficit%2Fhyperactivity%20disorder%20(,interferes%20with%20functioning%20or%20development'}> Learn more -> </button>
</h3>


</div>



    </div>
  );
}
export default Page4;
