import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="footerContainer flex flex-wrap justify-between p-8">
        {/* About Us Section */}
        <div className="section mb-6">
          <h4 className="text-lg font-bold text-white">ABOUT US</h4>
          <ul className="mt-2 text-gray-400">
            <li><Link href="#" className="hover:text-white transition duration-300">E-learning Advantage</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Philosophy</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Infrastructure and Facilities</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Founder Message</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Our Platform</Link></li>
          </ul>
        </div>
        {/* Academics Section */}
        <div className="section mb-6">
          <h4 className="text-lg font-bold text-white">ACADEMICS</h4>
          <ul className="mt-2 text-gray-400">
            <li><Link href="#" className="hover:text-white transition duration-300">Curriculum</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Assessment and Evaluation</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Guidance and Counselling</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">School Life</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Education</Link></li>
          </ul>
        </div>
        {/* General Info Section */}
        <div className="section mb-6">
          <h4 className="text-lg font-bold text-white">GENERAL INFO</h4>
          <ul className="mt-2 text-gray-400">
            <li><Link href="#" className="hover:text-white transition duration-300">Updates</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Announcements</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Download</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Press Coverage</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Admissions</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Uniform</Link></li>
          </ul>
        </div>
        {/* Events Section */}
        <div className="section mb-6">
          <h4 className="text-lg font-bold text-white">EVENTS</h4>
          <ul className="mt-2 text-gray-400">
            <li><Link href="#" className="hover:text-white transition duration-300">Photo Gallery</Link></li>
            <li><Link href="#" className="hover:text-white transition duration-300">Events & Happening</Link></li>
          </ul>
        </div>
      </div>
      <div className="bottomFooter flex flex-col md:flex-row justify-between items-center bg-gray-900 p-4 border-t border-gray-700">
        {/* Social Media Links */}
        <div className="socialMedia mb-4 md:mb-0">
          <h4 className="connect text-white">CONNECT WITH US</h4>
          <div className="icons flex space-x-4 mt-2 text-gray-400">
            <Link href="#"><FontAwesomeIcon icon={faFacebookF} size="lg" className="hover:text-blue-500 transition duration-300 transform hover:scale-110" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faTwitter} size="lg" className="hover:text-blue-400 transition duration-300 transform hover:scale-110" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} size="lg" className="hover:text-blue-600 transition duration-300 transform hover:scale-110" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faGooglePlusG} size="lg" className="hover:text-red-500 transition duration-300 transform hover:scale-110" /></Link>
            <Link href="#"><FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-pink-500 transition duration-300 transform hover:scale-110" /></Link>
          </div>
        </div> 
        {/* Subscribe Section */}
        <div className="subscribe flex items-center">
          <input type="email" placeholder="Enter your email address" className="p-2 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500" />
          <button className="p-2 rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300">Subscribe</button>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="copyRight bg-gray-900 text-center py-4 text-gray-400">
        <p>&copy; 2018 E-LEARNING. All rights reserved. Designed by SHASHANK GARG</p>
      </div>
    </footer>
  );
}

export default Footer;
