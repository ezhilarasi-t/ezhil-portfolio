import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#0a0f1c] via-[#1a1f35] to-[#0a0f1c] text-white h-auto items-center py-5 gap-4">
        <div className="flex flex-row gap-x-3">
        <a href="www.linkedin.com/in/ezhilarasi-t" target="_blank" >
                <Linkedin className="w-8 h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]  " />
            </a>
            <a href="https://github.com/ezhilarasi-t" target="_blank">
                <Github className="w-8 h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]  " />
            </a>
            <a href="https://www.instagram.com/_e_z_hil_/" target="_blank">
                <Instagram className="w-8 h-8 font-bold text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] " />
            </a>
      </div>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent tracking-wider">
          ezhilarasi.aty@gmail.com
        </h2>
      </div>
      <div className="flex-col justify-center flex-wrap gap-5 px-2">
        <a href="#home" className="px-1 text-md sm:text-xl font-medium tracking-wider text-cyan-400 hover:text-cyan-500">
          Home
        </a>
        <a href="#about" className="px-1 text-md sm:text-xl font-medium tracking-wider text-cyan-400 hover:text-cyan-500">
          About
        </a>
        <a href="#skills" className="px-1 text-md sm:text-xl font-medium tracking-wider text-cyan-400 hover:text-cyan-500">
          Skills
        </a>
        <a href="#projects" className="px-1 text-md sm:text-xl font-medium tracking-wider text-cyan-400 hover:text-cyan-500">
          Projects
        </a>
        <a href="#contact" className="px-1 text-md sm:text-xl font-medium tracking-wider text-cyan-400 hover:text-cyan-500">
          Contact
        </a>
      </div>
      <div>
      <p className="text-center text-gray-400">
       © 2025 Ezhilarasi. All rights reserved.
      </p>
      </div>
    </div>
  );
};

export default Footer;
