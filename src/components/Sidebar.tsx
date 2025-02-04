
import { useState } from "react";
import { HomeIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`h-screen bg-gray-900 text-white transition-all ${isOpen ? "w-64" : "w-16"}`}>
      <button className="p-3 bg-transparent" onClick={() => setIsOpen(!isOpen)}>
        <Bars4Icon className="w-6 h-6" />
      </button>
      <nav className="mt-10">
        <ul>
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-700">
            <HomeIcon className="w-6 h-6" />
            {isOpen && <span>Dashboard</span>}
          </li>
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-700">
            <ChartBarIcon className="w-6 h-6" />
            {isOpen && <span>Analytics</span>}
          </li>
          <li className="flex items-center space-x-4 p-3 hover:bg-gray-700">
            <CogIcon className="w-6 h-6" />
            {isOpen && <span>Settings</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
