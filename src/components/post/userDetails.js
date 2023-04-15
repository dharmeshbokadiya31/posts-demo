import React from 'react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/Routes';

const { snackbar } = require("tailwind-toast");
const UserDetails = ({
    item,
    users,
    setUsers
}) => {

    const navigate = useNavigate()
    const follow = (id) => {
        let updateData = users.map(detail => {
            if (detail.id === id) {
                if (detail.followed) {
                    return {
                        ...detail,
                        followed: undefined,
                    }
                } else {
                    snackbar()
                    .success(`You followed ${detail.firstName} ${detail.lastName}`, "")
                    .with({
                      color: "bg-green-600",
                      positionX: "end",
                      positionY: "end",
                      fontColor: "blue",
                    })
                    .show();
                    return {
                        ...detail,
                        followed: true,
                    }
                }
            } else {
                return detail
            }
        })
        setUsers(updateData)
    }

  return (
    <div className="max-w-sm overflow-hidden hover:shadow-lg transition-all p-6 border mb-4 rounded-sm">
    <div className="flex items-center gap-2 mb-2 flex-col">
      <img className="h-16 w-16 rounded-full mr-2" src={item?.image || "https://picsum.photos/50/50"} alt="User Avatar" />
      <h3 className="font-bold text-gray-900">{`${item?.firstName || ""} ${item?.lastName || ""}`}</h3>
    <div className='flex items-center gap-6'>
      <div className="text-gray-700 text-base text-center">
        <b className='block text-indigo-500 font-bold'>{item.height || 0}</b>
        <span>Followers</span></div>
      <div className="text-gray-700 text-base text-center">
        <b className='block text-indigo-500 font-bold'>{item?.age || 0}</b>
        <span>Posts</span>
      </div>
      <div className="text-gray-700 text-base text-center">
        <b className='block text-indigo-500 font-bold'>{item.weight ? Math.round(item.weight) : 0}</b>
        <span>Likes</span>
      </div>
    </div>
      <div className="flex items-center gap-4 mt-2">
        <button 
          onClick={() => follow(item.id)} 
          className={`border border-indigo-500 font-semibold py-2 px-4 rounded transition ${item.followed ? "bg-transparent text-indigo-500 hover:bg-indigo-500 hover:text-white" : "text-white bg-indigo-500 hover:bg-indigo-600"}`}
        >
            {item.followed ? "Following" : "Follow"}
        </button>
        <button
            onClick={() => 
                navigate(`${routes.userPosts}/${item.id}`)}
            className="border border-indigo-500 hover:bg-indigo-500 bg-transparent font-semibold text-indigo-500 hover:text-white transition py-2 px-4 rounded"
        >
            View Posts
        </button>
      </div>
    </div>
  </div>
  )
}

export default UserDetails