import { Copyright, Minus } from "lucide-react";

const About = () =>{
    return (
    <div className="flex flex-col items-center px-5 sm:px-15" id="about">
        <div className="flex flex-col pt-5 items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400  drop-shadow-[0_0_6px_#22d3ee]">Who I Am</h1>
        <Minus className="text-3xl h-12 w-20 sm:text-5xl font-bold text-blue-400 dark:text-slate-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 pt-5">
            <div className="w-full sm:w-1/2">
                <p className="text-xl sm:text-2xl text-gray-300 font-light leading-normal py-3">
                    Hi, I’m Ezhil 👩‍💻, a Front-End Developer with 3.3 years of experience creating fast, responsive, and user-friendly web applications. I specialize in ReactJS, Next.js, Tailwind CSS, and modern web tools, and I enjoy building products that blend creativity with technology. I also have experience in Java and Spring Boot, making me ready to take on full-stack opportunities. My goal is to keep learning and create meaningful solutions that make an impact.
                </p>
                <p className="text-xl sm:text-2xl text-gray-300 font-light leading-normal py-3">
                    🔥 If there is even a 1% chance, I give my 100%
                </p>
                <p className="text-xl sm:text-2xl text-gray-300 font-light leading-normal py-3">
                    🌟 Crafting beautiful code for a better web.
                </p>
            </div>
            <div className="w-full sm:w-1/2 px-6 sm:px-20">
                <div className="flex flex-col items-center ">
                   <h2 className="text-2xl font-bold text-white-400 pb-5">Experience</h2>
                </div>
                <ul className="flex flex-col gap-5">
                <li className="flex flex-row gap-3">
                    <div className="flex flex-col justify-center items-center sm:pr-5">
                      <Copyright className="h-14 w-14 text-blue-600 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl text-gray-300 font-bold">Cognizant</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium">Software Engineer</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-light ">Jul 2025 – Present</p>
                    </div>
                </li>
                <li className="flex flex-row gap-3">
                    <div className="flex flex-col justify-center items-center sm:pr-5">
                      <Copyright className="h-14 w-14 text-blue-600 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl text-gray-300 font-bold">Cognizant</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium ">Junior Software Engineer</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-light ">Jul 2022 – Mar 2025</p>
                    </div>
                </li>
                {/* <li className="flex flex-row gap-3">
                    <div className="flex flex-col justify-center items-center pr-5">
                      <Copyright className="h-14 w-14 text-blue-600 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl text-gray-300 font-bold leading-normal">Cognizant</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-normal">Programmer Analyst Trinee</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-light leading-normal">Jul 2022 – Jul 2023</p>
                    </div>
                </li> */}
                <li className="flex flex-row gap-3">
                    <div className="flex flex-col justify-center items-center sm:pr-5">
                      <Copyright className="h-14 w-14 text-blue-600 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl sm:text-2xl text-gray-300 font-bold ">Cognizant</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-medium ">Java Full Stack Developer Intern</p>
                        <p className="text-xl sm:text-2xl text-gray-300 font-light ">Dec 2021 – Jun 2022</p>
                    </div>
                </li>
                </ul>
                
            </div>
        </div>
    </div>
    )
}
export default About;