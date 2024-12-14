import Image from "next/image";
import Search from "@/components/search";
import Card from "@/components/card";
export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="bg-[#f3f4f6] w-full ">
        <Search />
        <Card
          style={"ml-auto mr-auto pd-5 mt-28 border-solid border-8 ease-in duration-300 hover:border-amber-300"}
          color={"bg-white"}
          image={"/Rain.png"}
        />
      </div>
      <div className="bg-[#0f141e] w-full relative">
        <Card
          style={"ml-auto mr-auto pd-5 mt-[190px] border-solid border-[#0f141e] border-8 ease-in duration-300 hover:border-black"}
          color={"bg-[#111827] "}
          image={"/sun.png"}
        />
        <div className="w-10 h-10 bg-[#f3f4f6] absolute rounded-full bottom-[594px] bg-transparent "></div>
        <div className="w-24 h-24 bg-[#f3f4f6] absolute rounded-full -left-10 bottom-[500px] flex gap-4 ">
          <img className="w-8 h-16 mt-4 z-10 " src="/vector6.png"></img>
          <div className="w-6 h-[140px] bg-[#f3f4f6] absolute ml-7 -mt-5"></div>
          <img className="w-8 h-16 mt-4 z-10  " src="/vector5.png"></img>
        </div>
        <div className="w-10 h-10 bg-[#f3f4f6] absolute rounded-full  bottom-[462px] bg-transparent  "></div>
      </div>
    </div>
  );
}
