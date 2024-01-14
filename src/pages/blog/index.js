import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import axios from 'axios';
import ArticleTitle from '../components/home/ArticleTitle';
import Link from 'next/link';

function index() {
  const [count,setCount] = useState(9)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
  const url = `https://dev.to/api/articles?state=fresh&per_page=${count}`;


  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setLoadMore(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

  }, [count]);

  const handleLoadMore =()=>{
    setLoadMore(true)
    setCount(prev=>prev+3)
  }
  return (
    <Layout>
      {loading?<h1>Loading...</h1>:<div className="flex flex-col gap-8 web:px-[350px] mt-[80px]">
      <h1 className="text-2xl font-bold text-[#181A2A]">All Blog Post</h1>
      <ul className="flex flex-wrap w-full gap-5 justify-center">
        {data.map((item) => {
          return (
            <Link href={`/blog/${item.id}`} className="flex flex-col p-4 gap-4 rounded-xl border-[1px] w-[30%] h-[476px] border-[#E8E8EA]">
              <div
                className="w-full h-[45%] bg-cover bg-center"
                style={{ backgroundImage: `url(${!item.cover_image ? './noImage.jpg' :item.cover_image})` }}
              ></div>
            <ArticleTitle item={item} textColor={'text-black'} tagColor={'text-[#4B6BFB]'} tagBg={'bg-[#4b6bfb]'} bgOpacity={'bg-opacity-5'}/>

            </Link>
          );
        })}
      </ul>
      {loadMore && <h1 className='self-center text-3xl mt-4'>Loading...</h1>}
      <button className="mt-[100px] px-5 py-3 text-[#696A75] border-[1px] w-[130px] flex self-center" onClick={handleLoadMore}>Load More</button>
    </div>}
     
    </Layout>
  )
}

export default index