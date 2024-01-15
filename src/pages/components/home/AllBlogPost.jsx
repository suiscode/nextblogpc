import axios from "axios";
import React, { useEffect, useState } from "react";
import AllBlogHeader from "./AllBlogHeader";
import ArticleTitle from "./ArticleTitle";
import Link from "next/link";

function AllBlogPost() {
  const [count, setCount] = useState(9);
  const [tagsData, setTagsData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTag, setSearchTag] = useState('');
  const url = `https://dev.to/api/articles?state=fresh&per_page=${count}`;

  useEffect(() => {
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
  }, [count]);

  useEffect(() => {
    const url = "https://dev.to/api/tags";
    axios
      .get(url)
      .then((res) => {
        setTagsData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setCount((prev) => prev + 3);
  };

  useEffect(() => {
    console.log(searchTag);
  }, [searchTag]);

  const filteredData = searchTag
    ? data.filter((item) => item.tag_list.includes(searchTag))
    : data;

  return (
    <div className="flex flex-col gap-8 web:px-[350px] px-5">
      <h1 className="text-2xl font-bold text-[#181A2A]">All Blog Post</h1>
      <AllBlogHeader data={tagsData} setSearchTag={setSearchTag} searchTag={searchTag}/>
      <ul className="flex web:flex-wrap web:flex-row flex-col w-full gap-5 justify-center">
        {filteredData.map((item) => (
          <Link href={`/blog/${item.id}`}
            key={item.id}
            className="flex flex-col p-4 gap-4 rounded-xl border-[1px] web:w-[30%] w-full h-[476px] border-[#E8E8EA]"
          >
            <div
              className="w-full h-[45%] bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  !item.cover_image ? "./noImage.jpg" : item.cover_image
                })`,
              }}
            ></div>
            <ArticleTitle
              item={item}
              textColor={"text-black"}
              tagColor={"text-[#4B6BFB]"}
              tagBg={"bg-[#4b6bfb]"}
              bgOpacity={"bg-opacity-5"}
            />
          </Link>
        ))}
      </ul>
      <button
        className="mt-[100px] px-5 py-3 text-[#696A75] border-[1px] w-[130px] flex self-center"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
}

export default AllBlogPost;
