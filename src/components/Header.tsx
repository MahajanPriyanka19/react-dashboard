import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <BellIcon className="w-6 h-6" />
        <UserCircleIcon className="w-8 h-8" />
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Header;
