import Link from 'next/link';
import React from 'react'

function AllBlogHeader({data,setSearchTag,searchTag}) {
  return (
    <div className="web:flex hidden justify-between relative">
        <ul className="flex gap-2">
          <li className={`font-bold text-[#495057] text-sm cursor-pointer ${!searchTag ?  `text-[#D4A373]`: `text-[#495057]`}`} onClick={()=>setSearchTag('')}>
            
            All
          </li>

          {data.map((item) => {
            return (
              <li
                key={crypto.randomUUID()}
                className={`font-bold text-sm text-[#495057] cursor-pointer ${searchTag === item.name ?  `text-[#D4A373]`: `text-[#495057]`}`}
                onClick={()=>setSearchTag(item.name)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <Link href='/blog' className="font-bold text-sm text-[#495057] cursor-pointer">
          View all
        </Link>
        <div className='bg-black w-[100px] h-[100px] absolute top-0 left-0'>
          menu
        </div>
      </div>
  )
}

export default AllBlogHeader