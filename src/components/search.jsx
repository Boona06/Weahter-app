"use client"
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
export default function searchBox() {
 
  
    return(
        <>
        <div className="flex bg-white w-3/6 rounded-full gap-2 ml-52" >
        <BiSearchAlt className="size-6 mt-5 ml-5"  />
        <input
          className="outline-none rounded-full w-96 h-16 "
          placeholder="Хотын нэр"
        ></input>
        </div>
        </>
    );
}