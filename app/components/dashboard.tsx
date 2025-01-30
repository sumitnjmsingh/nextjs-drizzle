import { useState } from "react";
import { FiHome, FiBarChart, FiSettings, FiUser } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Dashboard() {
  const [active, setActive] = useState("stats");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-800 flex flex-col items-center py-6 space-y-6">
        <FiHome size={24} className="cursor-pointer" />
        <FiBarChart size={24} className="cursor-pointer text-green-400" />
        <FaRegCalendarAlt size={24} className="cursor-pointer" />
        <FiUser size={24} className="cursor-pointer" />
        <FiSettings size={24} className="cursor-pointer" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Stats</h1>
        <p className="text-gray-400">Monthly Updates</p>

        {/* Sales Activity */}
        <section className="mt-6 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold">Daily Sales Activity</h2>
          <div className="flex items-center justify-between mt-4">
            <div className="h-24 w-24 bg-green-400 text-black font-bold text-center rounded-full flex items-center justify-center">
              $350.00
            </div>
            <div className="h-16 w-16 bg-red-400 text-black font-bold text-center rounded-full flex items-center justify-center">
              $2200
            </div>
            <div className="h-12 w-12 bg-yellow-400 text-black font-bold text-center rounded-full flex items-center justify-center">
              100
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-6 grid grid-cols-4 gap-4">
          {[
            { title: "TASKS COMPLETED", count: 27, trend: "-12%" },
            { title: "NEW TASKS ASSIGNED", count: 45, trend: "+16%" },
            { title: "OBJECTIVES COMPLETED", count: 24, trend: "-4%" },
            { title: "PROJECT COMPLETED", count: "61%", trend: "+5%" },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-sm text-gray-400">{card.title}</h3>
              <p className="text-2xl font-bold mt-2">{card.count}</p>
              <p className="text-sm text-green-400">{card.trend}</p>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="mt-6 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-lg font-semibold">Today, 12 Dec.</h2>
          <ul className="mt-4 space-y-4">
            {[
              { time: "8:30 - 9:00", task: "Dental Cleaning", user: "Edward" },
              { time: "9:30 am", task: "Calendar Updates", user: "John" },
              { time: "11:00 am", task: "Status Update", user: "Mike" },
              { time: "12:00 pm", task: "Meeting with AR", user: "Shakir" },
            ].map((event, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-green-400">{event.time}</p>
                <p className="text-lg font-medium">{event.task}</p>
                <p className="text-gray-400 text-sm">{event.user}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
