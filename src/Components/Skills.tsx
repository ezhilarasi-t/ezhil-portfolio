import { Minus } from "lucide-react";

const Skills = () =>{
    const skills = [
      { skillName: "HTML", img: "/HTML5.png",href : "",gradient: "from-orange-500 to-orange-700",level:"Experienced" },
      { skillName: "CSS", img: "/CSS3.png",href : "",gradient: "from-blue-500 to-blue-700",level:"Experienced" },
      { skillName: "Java script", img: "/JavaScript.png",href : "",gradient: "from-yellow-400 to-yellow-600",level:"Experienced" },
      { skillName: "ReactJs", img: "/React.png",href : "",gradient: "from-cyan-400 to-blue-600",level:"Experienced" },
      { skillName: "NextJs", img: "/Next.js.png",href : "",gradient: "from-cyan-400 to-blue-600",level:"intermediate" },
      { skillName: "Tailwind css", img: "/Tailwind CSS.png",href : "",gradient: "from-cyan-600 to-cyan-600",level:"intermediate" },
      { skillName: "Redux", img: "/Redux.png" ,href : "",gradient: "from-violet-500 to-violet-700",level:"Experienced" },
      { skillName: "TanStack Query", img: "/tanstack.png" ,href : "",gradient: "from-violet-500 to-violet-700",level:"intermediate" },
      { skillName: "Springboot", img: "/spring.png",href : "",gradient: "from-green-500 to-green-700",level:"intermediate" },
    ];
    return (
        <div className="flex flex-col justify-evenly px-5 sm:px-15" id="skills">
            <div className="flex flex-col items-center pt-5">
                <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400  drop-shadow-[0_0_6px_#22d3ee]">My Skills</h1>
                <Minus className="text-3xl h-12 w-20 sm:text-5xl font-bold text-blue-400 dark:text-slate-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-7 md:grid-cols-6 p-3 gap-7">
              {skills?.map((item,index)=>{
                return <div key={index} className={`flex flex-col p-5 rounded-xl items-center hover:scale-105 transition-transform duration-300`}>
                    <a href={item?.href} target="_blank"  className="flex flex-col items-center">
                    <img src={item?.img} alt = {item?.skillName} className={`h-34 w-35 drop-shadow-[0_0_3px_#22d3ee]  rounded-2xl p-2`} />
                    <div className="flex flex-col items-center justify-center pt-3">
                    <p className="text-md sm:text-1xl text-gray-300 font-bold tracking-wider">{item?.skillName}</p>
                    <p className="text-sm sm:text-md text-gray-500 font-bold tracking-wider">{item?.level}</p>
                    </div>
                    </a>
                </div>
              })}
              <div>
                
              </div>
            </div>
        </div>
    )
}

export default Skills;