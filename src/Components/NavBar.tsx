
import { Code, Folder, HomeIcon, Mail, User } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex p-3  bg-transparent border-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)] rounded-4xl text-sm lg:text-base fixed">
      <div className="gap-7 flex flex-row items-center">
        <a href="#home" className="px-1 hover:scale-95 transition-transform duration-100">
          <HomeIcon className="w-7 h-7  text-blue-500 hover:text-blue-700" />
        </a>
        <a href="#about" className="px-1 hover:scale-95 transition-transform duration-100">
          <User className="w-7 h-7  text-indigo-500 hover:text-indigo-700" />
        </a>
        <a href="#skills" className="px-1 hover:scale-95 transition-transform duration-100">
          <Code className="w-7 h-7  text-green-500 hover:text-green-700" />
        </a>
        <a href="#projects" className="px-1 hover:scale-95 transition-transform duration-100">
          <Folder className="w-7 h-7  text-purple-500 hover:text-purple-700" />
        </a>
        <a href="#contact" className="px-1 hover:scale-95 transition-transform duration-100">
          <Mail className="w-7 h-7 xs text-red-500 hover:text-red-700" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
