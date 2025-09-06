import MyPortfolio from "@/Components/MyPortfolio";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white px-6">
      <div className="flex flex-col pt-9 gap-8 items-center">
         <NavBar />
      </div>
      <MyPortfolio />
    </div>
  );
}
