import React from 'react'

function ArticleTitle({item, textColor, tagColor, tagBg, bgOpacity}) {
  return (
    <div className="h-[50%]">
                  {item.tags === "" ? (
                    ""
                  ) : (
                    <ul className="flex gap-2 flex-wrap">
                      {item.tags.split(",").map((item) => {
                        return (
                          <li
                            key={crypto.randomUUID()}
                            className={`${tagBg} ${tagColor} py-1 px-2 rounded-lg text-xs ${bgOpacity}`}
                          >
                            {!item.length ? 'no tag' : item}
                          </li>
                        );
                      })}
                    </ul>
                    
                  )}
                  <h1 className={`${textColor} font-semibold text-lg`}>{item.title}</h1>
                </div>
  )
}

export default ArticleTitle