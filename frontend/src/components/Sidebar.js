import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faLayerGroup, faBookOpen, faUsers, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

const Sidebar = () => {
  const router = useRouter();
  return (
    <section>
      <div className="bg-gray-100 w-64 top-0 left-0 h-full p-4">
      <div className="flex items-center justify-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OA1oas_Ixr-58sVfLVxcsVV0fZPTyNAf0AvDaIrM9y36-D-fF8MKDRbIOOKpslE9f1w&usqp=CAU"
          alt="Learning Logo"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <ul className="space-y-4">
        <li onClick={() => router.push('/allcourses')}>
          <a className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faBook} className="mr-3" />
            <span className="hidden lg:inline-block">All Courses</span>
          </a>
        </li>
        <li>
          <a href="/My Courses" className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
            <span className="hidden lg:inline-block">My Courses</span>
          </a>
        </li>
        <li onClick={() => router.push('/batch')}>
          <a className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faLayerGroup} className="mr-3" />
            <span className="hidden lg:inline-block">Batch</span>
          </a>
        </li>
        <li>
          <a href="/Subscription" className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faMoneyCheckAlt} className="mr-3" />
            <span className="hidden lg:inline-block">Subscription</span>
          </a>
        </li>
        <li>
          <a href="/Live Classes" className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            <span className="hidden lg:inline-block">Live Classes</span>
          </a>
        </li>
        <li>
          <a href="/Study Material" className="text-gray-800 hover:bg-gray-200 flex items-center p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            <FontAwesomeIcon icon={faBookOpen} className="mr-3" />
            <span className="hidden lg:inline-block">Study Material</span>
          </a>
        </li>
      </ul>
    </div>
    </section>
    
  );
};

export default Sidebar;
