"use client"
import { BiSearchAlt } from "react-icons/bi";
export default function searchBox({onchange,onKeyDown}) {
 
  
    return(
        <>
        <div className="flex bg-white w-3/6 rounded-full gap-2 ml-52" >
        <BiSearchAlt className="size-6 mt-5 ml-5"  />
        <input
          onChange={onchange}
          onKeyDown={onKeyDown}
          className="outline-none rounded-full w-96 h-16 text-neutral-950 "
          placeholder="Хотын нэр"
        ></input>
        </div>
        </>
    );
}