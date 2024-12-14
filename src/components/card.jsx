"use client"
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useState ,useEffect } from "react";
export default function Card(props){

    return(
    <>
         <div className={`h-[800px] w-2/6 ${props.color} rounded-[48px] ${props.style} border-solid border-8 `}>
            <div>
               <div className="flex justify-around pt-10 ">
                  <div >
                     <h3>September 10 2024</h3>
                     <h1 className={`font-bold text-[48px] `}>Ulaanbatar</h1>
                  </div>
                   <span><CiLocationOn  className="size-7 mt-4" /></span>
               </div>
                    <img src={props.image} className="h-[277px] w-[277px] mr-auto ml-auto mt-6 " />
                    <div className="flex gap-6">
                    <span className="font-bold text-[144px] ml-10 ">26</span>
                    <div className="w-8 h-8 bg-[#f3f4f6] rounded-full border-[10px] border-[#111827] mt-[60px] "></div>
                    </div>
                   <h1 className={`font-bold text-[24px] ml-10 text-[#ff8e27] `} >cloudy</h1>
            </div>
            <div className="flex justify-around mt-8">
               <a><CiHome className="size-7 " /></a>
               <a><CiLocationOn  className="size-7 " /></a>
               <a><FaRegHeart className="size-7" /></a>
               <a><FaRegUser className="size-7" /></a>
            </div>
          </div>
    </>
    );
}