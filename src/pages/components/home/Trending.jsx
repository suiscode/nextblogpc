import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TrendingForEach from "./TrendingForEach";

function Trending() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    
    const url = "https://dev.to/api/articles?state=rising&per_page=4";

    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  
}, []);




  return (
    <div className="w-full flex flex-col gap-[30px] px-5 web:px-[350px]">
      <h1 className="text-2xl font-bold">Trending</h1>
      <ul className="flex gap-6 w-full web:justify-between justify-center web:flex-row flex-col">
        {data.map((item) => {
          return (
            <TrendingForEach item={item} 
            key={crypto.randomUUID()}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Trending;
