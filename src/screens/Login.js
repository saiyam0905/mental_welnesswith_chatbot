import React from 'react';
import './App.css'; 

function Login() {
  const validateForm = (event) => {
    event.preventDefault();
    
    const userID = event.target.name.value;
    const password = event.target.psw.value;
    const email = event.target.email.value;

    // Regular expression for User ID validation
    const userIDRegex = /^[a-zA-Z][a-zA-Z .]{2,29}$/;
    if (!userIDRegex.test(userID)) {
      alert("Name should start with alphabet and can contain alphabets, space, with length 3-30 characters.");
      return false;
    }

    // Regular expression for Password validation
    const passwordRegex = /^[0-9][!@#$&][a-zA-Z0-9!@#$&]{6,18}$/;
    if (!passwordRegex.test(password)) {
      alert("Password should start with a digit followed by a special symbol and can contain alphabets, digits and special symbols with length 8-20 characters.");
      return false;
    }

    // Regular expression for Email validation
    const emailRegex = /^[a-zA-Z._]{3,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Email ID should contain username with minimum length 3 containing alphabets, underscore and dot followed by '@' symbol, organization name with minimum length 3 containing alphabets and domain name e.g. .com or .co.in");
      return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    // You can redirect or do other things here
  }

  return (
    <div className="bg-black bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('makimabg.jpg')" }}>
      <div className="container mx-auto mt-32 p-8 bg-green-200 w-1/2 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">ACCOUNT LOGIN</h1>
        <hr className="mb-6" />
        <form name="registrationForm" onSubmit={validateForm}>
          <label htmlFor="name" className="block text-lg font-semibold mb-2"><b>Name</b></label>
          <input type="text" placeholder="Enter Name" name="name" id="name" className="w-full p-3 mb-4 bg-gray-200 border border-gray-300 rounded" required />
          
          <label htmlFor="email" className="block text-lg font-semibold mb-2"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" className="w-full p-3 mb-4 bg-gray-200 border border-gray-300 rounded" required />
          
          <label htmlFor="psw" className="block text-lg font-semibold mb-2"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" className="w-full p-3 mb-4 bg-gray-200 border border-gray-300 rounded" required />
          
          <hr className="mb-6" />
          <p className="mb-4">By creating an account you agree to our <a href="#" className="text-blue-500">Terms & Privacy</a>.</p>
          
          <button type="submit" className="w-full p-4 bg-pink-500 text-white rounded hover:bg-pink-600">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
