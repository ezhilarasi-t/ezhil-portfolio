import { Minus } from "lucide-react";

const Contact = () =>{
    return (
         <div className="flex flex-col justify-evenly px-5 sm:px-15" id="contact">
            <div className="flex flex-col items-center pt-4">
                <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400  drop-shadow-[0_0_6px_#22d3ee]">Get In Touch</h1>
                <Minus className="text-3xl h-12 w-20 sm:text-5xl font-bold text-blue-400 dark:text-slate-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="flex flex-col pb-4 items-center">
                 <form action="https://formspree.io/f/xblaqjog" method="POST" className="flex flex-col gap-10 sm:w-2/3 p-10">
                    <input name="" required placeholder= "Your Name" className="p-5 rounded-2xl border border-pink-700 tracking-wider drop-shadow-[0_0_5px_rgba(52.5% 0.223 3.958)]" />
                    <input type="email" name="email" required placeholder= "Your Email" className="p-5 rounded-2xl border border-pink-700 tracking-wider" />
                    <textarea name="message" required minLength={50} placeholder="Your Message" className="p-5 rounded-2xl border border-pink-700 tracking-wider" />
                    <div className="flex flex-col items-center">
                    <button type="submit" className="p-4 w-40 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500  text-white font-semibold hover:scale-105 hover:shadow-lg transition duration-200 tracking-wide"
                        >
                        Let’s Talk 🚀
                        </button>
                    </div>
                 </form>
                 {/* <div className="flex flex-col sm:flex-row gap-6">
                 <div className="flex flex-col items-center p-4 border gap-y-2 rounded-2xl border-gray-600">
                      <Mail className="w-12 h-12 text-pink-700" />
                      <h4 className="text-xl sm:text-2xl font-bold tracking-wide">Email</h4>
                      <h3 className="text-xl sm:text-2xl font-medium text-white-600 tracking-wide">ezhilarasi.aty@gmail.com</h3>
                </div>
                    <div className="flex flex-col items-center p-4 border gap-y-2 rounded-2xl border-gray-600">
                      <MessageSquareMore className="w-12 h-12 text-green-700" />
                      <h4 className="text-xl sm:text-2xl font-bold tracking-wide">Whats app</h4>
                      <h3 className="text-xl sm:text-2xl font-medium text-white-600 tracking-wide">+91 98949 27154</h3>
                    </div>
                    </div> */}
            </div>
        </div>
    )
}

export default Contact;
