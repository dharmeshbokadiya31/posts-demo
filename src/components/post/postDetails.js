import React from 'react'
const { snackbar } = require("tailwind-toast");

const PostDetails = ({
    item,
    data,
    setData
}) => {
  
  const likeFunc = (id) => {
    let updateData = data.map(detail => {
        if (detail.id === id) {
            if (detail.like) {
                return {
                    ...detail,
                    like: undefined,
                    reactions: detail.reactions - 1
                }
            } else {
                snackbar()
                .success("You Liked Post", "")
                .with({
                  color: "bg-green-600",
                  positionX: "end",
                  positionY: "end",
                  fontColor: "blue",
                })
                .show();
                return {
                    ...detail,
                    like: true,
                    reactions: detail.reactions + 1
                }
            }
        } else {
            return detail
        }
    })
    setData(updateData)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full border" key={item.id}>
        <img src="https://picsum.photos/600/400" alt="Post Image" className="w-full h-48 object-cover" />
        <div className="p-4">
            <h2 className="font-bold text-2xl mb-2 line-clamp-2 text-indigo-600">{item?.title || ""}</h2>
            <div className="mb-2">
                {item?.tags?.map(tag => 
                <span className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs mr-2">{tag?.value || tag}</span>
                )}
            </div>
            <p className="text-gray-700">{item?.body || ""}</p>
        </div>
            <div className="flex justify-between items-center p-4 mt-auto">
            <div className="flex items-center gap-2">
                {item.like === true ?
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" onClick={() => likeFunc(item.id)}>
                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" fill="rgba(255,0,0,1)">
                            </path>
                    </svg>
                    :
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" onClick={() => likeFunc(item.id)}>
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="currentColor"
                    className="h-6 w-6 text-gray-800"
                    >
                        </path>
                </svg>}
                <span className="text-gray-800 font-semibold">{item.reactions} Likes</span>
            </div>
            <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path className="h-6 w-6 text-gray-800" d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z" fill="#000"></path></svg>
                <span className="text-gray-800 font-semibold">8 Comments</span>
            </div>
            </div>
    </div>
  )
}

export default PostDetails