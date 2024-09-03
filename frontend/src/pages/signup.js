import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

function Signup() {
  const router = useRouter();

  const [teacher_id, setTeacher_id] = useState('');
  const [teacher_name, setTeacher_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [qualification, setQualification] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [mobile_no, setMobile_no] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      teacher_id,
      teacher_name,
      email,
      password,
      qualification,
      status,
      gender,
      mobile_no,
    };

    axios
      .post('http://localhost:5002/teacherSignup', data)
      .then((res) => {
        router.push('/login'); // Redirect to login page after successful signup
      })
      .catch((err) => console.log(err));
  };


  return (
    <>

      <div
        style={{
          height: '90vh',

        }}
        className="flex justify-center items-center"
      >
        <div className="container w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                 
                >
                  Name
                </label>
                <input
                  name="name"
                  // onChange={handleChange}
                  placeholder='Enter your name'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={teacher_name}
                  onChange={(e) => setTeacher_name(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  // onChange={handleChange}
                  placeholder='Enter your email'
                  type="email"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  // onChange={handleChange}
                  placeholder='*******'
                  type="password"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="qualification"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Qualification
                </label>
                <input

                  name="qualification"
                  // onChange={handleChange}
                  placeholder='Enter your qualification'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  name="gender"
                  // onChange={handleChange}
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Mobile
                </label>
                <input
                  name="mobile"
                  // onChange={handleChange}
                  placeholder='Enter your mobile number'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={mobile_no}
                            onChange={(e) => setMobile_no(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="aadhar"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                Status
                </label>
                <input
                  name="Status"
                  // onChange={handleChange}
                  placeholder='Enter your Status'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={status}
                            onChange={(e) => setStatus(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                 teacher_id
                </label>
                <input
                  name="experience"
                  // onChange={handleChange}
                  placeholder='Enter your experience'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  value={teacher_id}
                  onChange={(e) => setTeacher_id(e.target.value)}
                />
              </div>
               {/* <div className="mb-4">
                <label
                  htmlFor="aadhar"
                  className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Aadhar
                </label>
                <input
                  name="aadhar"
                  // onChange={handleChange}
                  placeholder='Enter your Aadhar number'
                  type="text"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  
                />
              </div> */}
            </div>

            <div className='flex items-center justify-between mb-4'>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md"
              >
                Signup
              </button>
              <Link href='/login' style={{ all: "unset" }}>
                <button
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md"
                >
                  Already a User?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Signup
