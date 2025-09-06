import Home from "@/app/page";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import HomePage from "./Home";



const MyPortfolio = () => {
    return (
        <div className="flex flex-col w-full gap-18 pt-15">
            <HomePage />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default MyPortfolio;
