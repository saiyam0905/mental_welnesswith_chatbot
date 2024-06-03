import React from "react";

function Navbar() {
  const scrollToFooter = () => {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });

    
  };
  return (
    <nav className='white p-4 flex justify-end items-center border-b-2 border-gray-300 fixed top-0 w-full bg-white bg-opacity-70'>
      <ul className='flex items-center '>
        <li><button className="text-blue-900 hover:text-gray-700 font-bold focus:outline-none ">About</button></li>
        <li className="ml-20"><button className="text-blue-900 hover:text-gray-700 font-bold focus:outline-none">Resources</button></li>
        <li className="ml-20"><button className="text-blue-900 hover:text-gray-700 font-bold focus:outline-none">Services</button></li>
        <li className="ml-20" onClick={scrollToFooter}><button className="text-blue-900 hover:text-gray-700 font-bold focus:outline-none">Contact</button></li>
        <li className="ml-20"><button className="bg-green-500 p-2 rounded-lg text-blue-900 hover:text-gray-700 font-bold focus:outline-none">Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
