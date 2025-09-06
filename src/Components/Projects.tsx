import { Minus } from "lucide-react";

const Projects = () =>{
    const projects = [
    { projectName: "💻 Portfolio (2025 – Phase I)", img: "/portfolioProject.png",gitHubLink : "https://github.com/ezhilarasi-t/ezhil-portfolio",gradient: "from-orange-500 to-orange-700",description:"A modern portfolio built with Next.js & Tailwind CSS.Fully responsive, smooth navigation, and clean UI design.Highlights my skills, projects, and career journey.Latest work reflecting my growth as a front-end developer." },
      { projectName: "🚀 Mini Amazon (2023 – Early Project)", img: "/miniAmazonProject.png",gitHubLink : "https://github.com/ezhilarasi-t/mini-amazon/tree/feature_ezhil",gradient: "from-orange-500 to-orange-700",description:"An e-commerce prototype for mobiles & cameras.Developed during my initial learning phase with ReactJS, Redux, and Spring Boot.Implemented cart & checkout features with Bootstrap UI.Showcases my early foundation in full-stack development." },
      { projectName: "🍕 Hot Foods (2023 – Early Project)", img: "/hotFoodProject.png",gitHubLink : "https://github.com/ezhilarasi-t/hot-food",gradient: "from-orange-500 to-orange-700",description:"A food ordering web app with menu cards & cart system.Built using ReactJS, Context API, Material UI, and Bootstrap.Users can browse dishes, check prices, and add to cart.One of my first hands-on projects exploring UI & state management." },
    ];
    return (
        <div className="flex flex-col justify-evenly px-5 sm:px-15" id="projects">
            <div className="flex flex-col items-center pb-5">
                <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400  drop-shadow-[0_0_6px_#22d3ee]">My Projects</h1>
                <Minus className="text-3xl h-12 w-20 sm:text-5xl font-bold text-blue-400 dark:text-slate-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects?.map((item,index)=>{
                    return <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img src={item?.img} alt={item?.projectName} className="w-full h-48 object-cover" />
                        <div className="flex flex-col gap-1 p-2">
                            <h2 className="text-md sm:text-1xl text-black font-bold tracking-wider">{item?.projectName}</h2>
                            <h3 className="text-sm sm:text-md text-gray-600 tracking-wider">{item?.description}</h3>
                            <a href={item.gitHubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-max bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm px-3 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                🔗 GitHub
                                </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects;
