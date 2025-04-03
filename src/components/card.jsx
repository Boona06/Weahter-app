"use client";
import { CiHome, CiLocationOn } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className={`max-h-[760px] max-w-sm ${props?.color} rounded-[48px] ${props?.style}`}>
      <div className="flex justify-around pt-10">
        <div>
          <h3 className="text-gray-950">{props?.date}</h3>
          <h1 className="font-bold text-[48px]">{props?.city}</h1>
        </div>
        <CiLocationOn className="size-7 mt-4" />
      </div>
      <div className="h-[277px] w-[277px] mx-auto mt-6 relative">
        <img src={props?.image} alt="weather condition" className="h-[277px] w-[277px] blur-md" />
        <img src={props?.image} alt="weather condition" className="h-[277px] w-[277px] absolute top-0 z-10" />
      </div>
      <div className="flex  gap-6">
        <p className={`font-bold text-[120px] bg-clip-text text-transparent ml-10 ${props.temperatureColor
        }`}> { Math.floor(props?.temperature) }</p>
        <div className={`w-8 h-8 rounded-full border-[10px] ${props.circle
        } mt-[40px] p-2 `} ></div>
    </div>
      <h1 className={`font-bold text-[24px] ml-10 ${props?.conditionColor}`}>{props?.condition}</h1>
      <div className="flex justify-around mt-8">
        <button><CiHome className="size-7 hover:text-zinc-950" /></button>
        <button><CiLocationOn className="size-7 hover:text-zinc-950" /></button>
        <button><FaRegHeart className="size-7 hover:text-zinc-950" /></button>
        <button><FaRegUser className="size-7 hover:text-zinc-950" /></button>
      </div>
    </div>
  );
}
