import Link from 'next/link';
import React from 'react'
import ArticleTitle from './ArticleTitle';

function TrendingForEach({item}) {
  return (
    <Link
            href={`/blog/${item.id}`}
              className="web:w-[23%] w-full h-[320px] bg-cover bg-center rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${item.social_image})` }}
            >
              <div className="bg-black w-full h-full bg-opacity-40 flex flex-col justify-end py-7 px-4">
                <ArticleTitle item={item} textColor={'text-white'} tagColor={'text-white'} tagBg={'bg-[#4B6BFB]'}/>
              </div>
            </Link>
  )
}

export default TrendingForEach