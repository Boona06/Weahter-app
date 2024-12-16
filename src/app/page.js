"use client"


import Image from "next/image";
import Search from "@/components/search";
import Card from "@/components/card";
import { useState ,useEffect } from "react";
export default function Home() {


const API_KEY="09d66b5e838b40e19ff72738241312"
  const [search,setSearch]=useState('')
  const [city,setcity]=useState("Ulaanbaatar")
  const [dayWeather,setDayWeather]=useState({})
  let onchange=(event)=>{
   const value=event.target.value
   setSearch(value)
  }
  const onPressEnter=(e)=>{
    if(e.code==="Enter"){
      setcity(search)
    }
  }
  useEffect(()=>{
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=09d66b5e838b40e19ff72738241312&q=${city}&days=1&aqi=no&alerts=no`)
    .then( (response)=>response.json())
    .then ((data)=>{
     console.log(data)
      setDayWeather({
        temperature: data.forecast.forecastday[0].day.maxtemp_c,
        nightTemp: data.forecast.forecastday[0].day.mintemp_c,
        condition: data.forecast.forecastday[0].day.condition.text,
        nightCondition: data.forecast.forecastday[0].hour[22].condition.text,
        date:data.forecast.forecastday[0].date 
      })
    })
    },[city])
  return (
    <div className="flex h-screen  ">
      <div className="bg-[#f3f4f6] w-full ">
        <Search onchange={onchange} onKeyDown={onPressEnter}/>
        <Card
          style={"ml-auto mr-auto pd-5 mt-28 border-solid border-8 ease-in duration-300 hover:border-amber-300"}
          color={"bg-white"}
          image={"/sun.png"}
          city={city}
          temperature={dayWeather.temperature}
          condition={dayWeather.condition}
          date={dayWeather.date}
        />
      </div>
      <div className="bg-[#0f141e] w-full relative">
        <Card
          style={"ml-auto mr-auto pd-5 mt-[190px] border-solid border-[#0f141e] border-8 ease-in duration-300 hover:border-black"}
          color={"bg-[#111827] "}
          image={"/Moon.png"}
          city={city}
          temperature={dayWeather.nightTemp}
          condition={dayWeather.nightCondition}
          date={dayWeather.date}
        />

          <div className="w-6 h-[140px] bg-[#0f141e] z-10  absolute -mt-[672px] rounded-bl-3xl "></div> 
            <div className="w-28 h-28 bg-[#f3f4f6] absolute rounded-full -left-16 bottom-[500px] flex gap-2 border-solid border-2 ">
              <img className="w-6 h-12 mt-7 ml-8 z-30 " src="/vector6.png"></img>
                <div className="w-6 h-[140px] bg-[#f3f4f6] absolute ml-12 -mt-5 z-0 "></div>
              <img className="w-6 h-12 mt-7 z-30  " src="/vector5.png"></img>
             </div>
          <div className="w-6 h-[140px] bg-[#0f141e]  absolute -mt-[435px] rounded-tl-3xl "></div>
      </div>
    </div>
  );
}
