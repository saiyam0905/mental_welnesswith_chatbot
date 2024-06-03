// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-8">
            <h3 className="text-lg font-bold mb-2">Mental Health</h3>
            <p className="text-sm">123 Company St, Jaipur</p>
            <p className="text-sm">Email: helpyourself@gmail.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-8">
            <h3 className="text-lg font-bold mb-2">Product Name</h3>
            <p className="text-sm">About</p>
            <p className="text-sm">Features</p>
            <p className="text-sm">Pricing</p>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 md:pl-8">
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            <ul>
              <li><a href="#" className="text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-sm">Support</a></li>
              <li><a href="#" className="text-sm">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
