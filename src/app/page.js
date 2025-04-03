  "use client";
  import { useState, useEffect } from "react";
  import Search from "@/components/search";
  import Card from "@/components/card";

  export default function Home() {
    const API_KEY = "09d66b5e838b40e19ff72738241312";
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("Ulaanbaatar");
    const [dayWeather, setDayWeather] = useState({});
    const [suggest, setSuggest] = useState([]);
    const [errorMessage, setErrorMessage] = useState(""); 

    const fetchWeather = async (cityName) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=no&alerts=no`
        );

        if (!response.ok) {
          throw new Error("Цаг агаарын мэдээлэл авахад алдаа гарлаа! Та хотын нэрээ шалгана уу? ");
        }

        const data = await response.json();
        setDayWeather({
          temperature: data.forecast.forecastday[0].day.maxtemp_c,
          nightTemp: data.forecast.forecastday[0].day.mintemp_c,
          condition: data.forecast.forecastday[0].day.condition.text,
          nightCondition: data.forecast.forecastday[0].hour[22].condition.text,
          date: data.forecast.forecastday[0].date,
        });

        setErrorMessage(""); 
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    useEffect(() => {
      fetchWeather(city);
    }, [city]);

    return (
      <div className="flex ">
        <div className="bg-gray-100 w-full">
          <Search
            onchange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.code === "Enter" && setCity(search)}
            suggestions={suggest}
            onSelect={(suggestion) => {
              setSearch(suggestion.name);
              setCity(suggestion.name);
              setSuggest([]);
            }}
          />
          {errorMessage && (
            <div className="text-red-600 font-bold text-center mt-4">
              {errorMessage}
            </div>
          )}

          <Card
            style="mx-auto mt-28 p-5  border-8 border-transparent hover:border-amber-300 transition"
            color="bg-white"
            image="/Sun.png"
            city={city}
            temperature={dayWeather.temperature}
            temperatureColor={" bg-gradient-to-b from-[#111827] to-[#6B7280] from-75% "}
            circle={"bg-white "}
            condition={dayWeather.condition}
            conditionColor={" text-[#FF8E27] "}
            date={dayWeather.date}
          />
        </div>
        <div className="bg-[#0F141E] w-full relative">
          <Card
            style="mx-auto mt-48 p-5 border-8  border-gray-900 hover:border-black transition"
            color=" bg-gradient-to-b from-[#1F2937] to-[#11182700] "
            image="/Rain.png"
            city={city}
            temperature={dayWeather.nightTemp}
            temperatureColor={" bg-gradient-to-b form-[#F9FAFB] to-[#F9FAFB] from-30% "}
            circle={"bg-[#0F141E] "}
            condition={dayWeather.nightCondition}
            conditionColor={" text-[#777CCE] "}
            date={dayWeather.date}
          />
        </div>
      </div>
    );
  }
