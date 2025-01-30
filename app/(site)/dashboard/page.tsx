"use client";
import { useState,useEffect } from "react";
import { FiHome, FiBarChart2, FiCalendar, FiSettings } from "react-icons/fi";
import { TbCodeCircle2Filled } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

export default function Dashboard() {

  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.status==="unauthenticated") {
      router.push('/pages');
    }
  }, [session?.status, router]);


  const tasks = [
    { time: "8:30 - 9:00", title: "Code Care", person: "Edward Johnson", color: "bg-purple-600" },
    { time: "8:30 - 9:00", title: "Status Update to John Doe", person: "John Doe", color: "bg-blue-600" },
    { time: "9:30 am", title: "Calendar Updates", person: "Edward Johnson", color: "bg-gray-500" },
    { time: "11:00 am", title: "Send Detailed Status Update", person: "Mike Taylor", color: "bg-green-600" },
    { time: "12:00 pm", title: "Meeting with AR Shakir", person: "AR Shakir", color: "bg-red-600" },
    { time: "1:00 pm", title: "Call New Leads", person: "Mike, John, Chris", color: "bg-indigo-600" },

    
  ];


  return (
    (session.status==="authenticated"?(<div className="flex sm:flex-row flex-col h-screen bg-gray-900 text-white relative">
      {/* Sidebar */}
      <aside className=" sm:w-20 w-full bg-gray-800 p-4 flex sm:flex-col flex-row justify-between items-center">
        <div className="sm:space-y-6 flex sm:flex-col  flex-row justify-between sm:space-x-0 space-x-5">
          <FiHome className="text-2xl cursor-pointer hover:text-green-400" />
          <FiBarChart2 className="text-2xl cursor-pointer hover:text-green-400" />
          <FiCalendar className="text-2xl cursor-pointer hover:text-green-400" />
          <Link href="dashboard/codeeditor"><TbCodeCircle2Filled className="text-2xl cursor-pointer hover:text-green-400" /></Link>
          <Link href="dashboard/edituserProfile"><FaUserEdit className="text-2xl cursor-pointer hover:text-green-400" /></Link>

          <FiSettings className="text-2xl cursor-pointer hover:text-green-400" />
        </div>
        <div className="flex items-center sm:flex-col flex-row justify-between gap-2">
        <button
      onClick={() => signOut({ callbackUrl: '/pages' })}
      className="px-4 py-2  text-white font-bold font-serif"
    >
      <FaSignOutAlt className="text-2xl cursor-pointer hover:text-green-400" />
    </button>
        <FaUserCircle className="text-3xl cursor-pointer" />
        </div>
      </aside>

      <div className=" flex sm:justify-start sm:items-start justify-center items-center sm:flex-row flex-col sm:w-full ">

      {/* Main Content */}
      <main className="sm:flex-1  p-6 sm:overflow-y-auto">
        <h2 className="text-3xl font-bold">Stats</h2>
        <p className="text-gray-400">Monthly Updates</p>


        {/*   Background Activity */}
        <div className="p-6 bg-gray-800 rounded-xl mt-6">
               
        </div>

        {/* Analytics Section */}
        <div className="mt-6 grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="sm:text-lg text-md font-bold">Daily Users Activity</h3>
            <div className="flex sm:flex-row flex-col justify-between items-center mt-4">
              <span className="text-green-400 sm:text-lg text-md font-bold">$350.00</span>
              <span className="text-gray-400 sm:text-lg text-md">Apr 2023</span>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="sm:text-lg text-md font-bold">Weekly Invoices</h3>
            <div className="flex sm:flex-row flex-col justify-between items-center mt-4">
              <span className="text-gray-400 sm:text-lg text-md">Min: 24,170</span>
              <span className="text-gray-400 sm:text-lg text-md">Max: 28,170</span>
            </div>
          </div>
        </div>

        {/* Task Summary */}
        <div className="mt-6 grid sm:grid-cols-4 grid-cols-1 gap-4 ">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">27</p>
            <p className="text-gray-400 sm:text-lg ">Tasks Completed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">45</p>
            <p className="text-gray-400 sm:text-lg ">New Tasks Assigned</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">24</p>
            <p className="text-gray-400 sm:text-lg ">Objectives Completed</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <p className="text-2xl font-bold">61%</p>
            <p className="text-gray-400 sm:text-lg ">Project Completed</p>
          </div>
        </div>
      </main>

      {/* Right Sidebar - Task List */}
      <aside className=" w-80 bg-gray-800 p-6 rounded-lg sm:overflow-y-auto sm:h-full ">
        <h3 className="text-lg font-bold mb-4">Today, 30 Jan.</h3>
        <div className="space-y-4">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center bg-gray-700 p-4 rounded-xl">
              <span className={`w-3 h-3 rounded-full ${task.color} mr-4`}></span>
              <div>
                <p className="text-sm font-bold">{task.title}</p>
                <p className="text-xs text-gray-400">{task.time} - {task.person}</p>
              </div>
              <BsThreeDots className="ml-auto text-gray-400 cursor-pointer" />
            </div>
          ))}
        </div>
      </aside>
      </div>
    </div>):(<div>Loading...</div>)
  ));
}
