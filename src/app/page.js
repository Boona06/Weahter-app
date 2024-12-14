import Image from "next/image";
import Search from "@/components/search";
import Card from "@/components/card";
export default function Home() {
  return (
    <div className="flex h-screen ">
      <div className="bg-[#f3f4f6] w-full ">
        <Search />
        <Card
          style={"ml-auto mr-auto pd-5 mt-28"}
          color={"bg-white"}
          image={"/Rain.png"}
        />
      </div>
      <div className="bg-[#0f141e] w-full relative">
        <Card
          style={"ml-auto mr-auto pd-5 mt-[190px]"}
          color={"bg-[#111827] "}
          image={"/sun.png"}
        />
        <div className="w-8 h-8 bg-[#f3f4f6] absolute rounded-full bottom-[595px]  "></div>
        <div className="w-24 h-24 bg-[#f3f4f6] absolute rounded-full -left-10 bottom-[500px] flex gap-4 ">
          <img className="w-8 h-16 mt-4" src="/vector6.png"></img>
          <img className="w-8 h-16 mt-4" src="/vector5.png"></img>
        </div>
        <div className="w-8 h-8 bg-[#f3f4f6] absolute rounded-full  bottom-[470px] shadow-2xl  "></div>
      </div>
    </div>
  );
}
