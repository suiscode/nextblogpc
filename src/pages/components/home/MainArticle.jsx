import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainArticle() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsIndex, setNewsIndex] = useState(0);

  useEffect(() => {
    const url = "https://dev.to/api/articles?top=1&per_page=10";
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
  console.log(data);

  const handleIncrement = () => {
    if (newsIndex === 9) {
      setNewsIndex(0);
    } else {
      setNewsIndex((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (newsIndex === 0) {
      setNewsIndex(9);
    } else {
      setNewsIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="web:flex hidden flex-col items-end web:px-[350px] z-0">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Link
          href={`/blog/${data[newsIndex].id}`}
          className="rounded-[12px] w-full h-[600px] relative bg-cover bg-no-repeat bg-center cursor-pointer "
          style={{
            backgroundImage: `url(${data[newsIndex].cover_image})`,
          }}
        >
          <div className="absolute w-[45%] h-[45%] bottom-0 bg-white m-4 rounded-xl p-10 flex flex-col justify-between">
            {data[newsIndex].tags === "" ? (
              ""
            ) : (
              <ul className="flex gap-2">
                {data[newsIndex].tags.split(",").map((item) => (
                  <li
                    key={crypto.randomUUID()}
                    className="bg-[#4B6BFB] text-white py-1 px-2 rounded-lg text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <h1 className="font-semibold text-4xl w-full">
              {data[newsIndex].title}
            </h1>
            <p className="text-[#97989F]">
              {data[newsIndex].readable_publish_date} 2022
            </p>
          </div>
        </Link>
      )}
      <div className="flex gap-2 mt-3">
        <button
          className="border-[1px] border-[#696A75] rounded-md p-1 bhover"
          onClick={handleDecrement}
        >
          <BsChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="border-[1px] border-[#696A75] rounded-md p-1 bhover"
          onClick={handleIncrement}
        >
          <BsChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default MainArticle;
