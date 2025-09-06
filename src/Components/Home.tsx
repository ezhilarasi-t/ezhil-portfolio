'use-client'

import { Github, Instagram, Linkedin, MailIcon } from "lucide-react";

const HomePage = () => {
  
  return (
    <div className="flex flex-col pt-9 gap-8 items-center w-full" id="home">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex flex-col gap-4 pt-8 pb-4">
        <h2 className="text-xl sm:text-3xl text-gray-300 font-light">Hello,</h2>
        <h1 className="text-4xl sm:text-7xl font-extrabold text-white tracking-wide">
          I'm <span className="text-yellow-400 hover:text-blue-400">Ezhilarasi T</span>
        </h1>
        <h2 className="text-xl sm:text-4xl font-medium text-gray-400">
          And I'm a <span className="text-green-400">Front-end Developer</span>
        </h2>
        </div>
        <div className="flex flex-row gap-6 pb-6">
            <a href="www.linkedin.com/in/ezhilarasi-t" target="_blank" >
                <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:rounded-full" />
            </a>
            <a href="https://github.com/ezhilarasi-t" target="_blank">
                <Github className="w-7 h-7 sm:w-8 sm:h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:rounded-full " />
            </a>
            <a href="https://www.instagram.com/_e_z_hil_/" target="_blank">
                <Instagram className="w-7 h-7 sm:w-8 sm:h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:shadow-[0_0_10px_rgba(236,72,153,0.8)] hover:rounded-full" />
            </a>
        </div>
        <div className="flex flex-col w-full sm:flex-row gap-4 pb-4">
        <button className="px-6 py-2 text-lg font-semibold text-white rounded-full 
            bg-gradient-to-r from-violet-300 via-purple-500 to-blue-500 
            shadow-[0_0_8px_#ec4899] hover:shadow-[0_0_16px_#ec4899] 
            transition duration-200"><a href="#contact">Get in Touch</a></button>
        <button className="px-6 py-2 text-lg font-semibold text-white rounded-full border border-blue-400 
            hover:bg-blue-600 hover:shadow-[0_0_15px_#3b82f6] transition duration-200"><a href="/Ezhil_Resume.pdf" download>Download CV</a></button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
