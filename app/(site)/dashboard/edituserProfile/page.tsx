'use client';
import { useState } from 'react';
import { FiEdit, FiBold, FiItalic, FiUnderline, FiList, FiSmile } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { FiHome, FiBarChart2, FiCalendar, FiSettings } from "react-icons/fi";
import Link from 'next/link';

export default function Dashboard() {
  const sections = [
    { title: 'Basic Information', status: 'Completed' },
    { title: 'Professional Summary', status: 'Pending' },
    { title: 'Highlights of Experience', status: 'Pending' },
    { title: 'Skills and Experience', status: 'Pending' },
    { title: 'My Availability for Trainings', status: 'Pending' },
    { title: 'Community Engagement', status: 'Pending' }
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className=" flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:items-stretch min-h-screen bg-gray-900 text-white ">


      <aside className=" m-2 sm:w-[50px] w-full bg-black sm:rounded-[40px] gap-5 p-4 flex sm:flex-col flex-row justify-between items-center">
        <div className="sm:space-y-6 flex sm:flex-col  flex-row justify-between sm:space-x-0 space-x-5">
          <Link href="/dashboard"><FiHome className="text-2xl cursor-pointer hover:text-green-400" /></Link>
          <FiBarChart2 className="text-2xl cursor-pointer hover:text-green-400" />
          <FiCalendar className="text-2xl cursor-pointer hover:text-green-400" />
          {/* <Link href="/codeeditor"><TbCodeCircle2Filled className="text-2xl cursor-pointer hover:text-green-400" /></Link> */}
          <FiSettings className="text-2xl cursor-pointer hover:text-green-400" />
        </div>
        <FaUserCircle className="text-4xl cursor-pointer" />
      </aside>


      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <FaUserCircle className="text-4xl" />
          <span className="text-lg font-bold">Edit Profile</span>
        </div>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
    expanded === index ? 'bg-blue-600' : 'hover:bg-gray-700'
  }`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
      <div className="space-y-4 p-20 bg-blue-400 m-2 rounded-lg"></div>
        <h2 className="text-3xl font-bold mb-6">Profile Overview</h2>
        
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <h3 className="text-lg font-bold">{section.title}</h3>
                <span className={section.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}>
                  {section.status}
                </span>
              </div>
              {expanded === index && (
                <div className="mt-4">
                  <p className="text-gray-400 mb-2">Enter your details here...</p>
                  {/* Comment Box */}
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex space-x-2 mb-2">
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                        <FiBold />
                      </button>
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                        <FiItalic />
                      </button>
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                        <FiUnderline />
                      </button>
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                        <FiList />
                      </button>
                      <button className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                        <FiSmile />
                      </button>
                    </div>
                    <textarea
                      className="w-full h-20 bg-gray-800 p-2 rounded-md text-white focus:outline-none"
                      placeholder="Write a comment..."
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
