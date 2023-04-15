import React, { useState } from 'react'
import AddEditComment from './addEditComment'

const CommentDetails = ({
    item,
    deleteComment,
    loading3,
    updateComment
}) => {
    const [editComment, setEditComment] = useState(false)
    const [commentText, setCommentText] = useState("")

  const update = async () => {
    await updateComment(item.id, commentText)
    setCommentText("")
    setEditComment(false)
  }

  return (
    <div className='p-4 border border-t'>
    <div className='flex justify-between'>
        <div className='flex items-center'>
    <img className="h-10 w-10 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User Avatar" />
    <b className='text-indigo-600'>{item?.user?.username}</b>
    </div>
    <div className='flex items-center gap-2'>
        <p>2 days ago</p>
        <svg onClick={() => setEditComment(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" className='cursor-pointer'>
            <path d="M12.8995 6.85431L17.1421 11.0969L7.24264 20.9964H3V16.7538L12.8995 6.85431ZM14.3137 5.44009L16.435 3.31877C16.8256 2.92825 17.4587 2.92825 17.8492 3.31877L20.6777 6.1472C21.0682 6.53772 21.0682 7.17089 20.6777 7.56141L18.5563 9.68273L14.3137 5.44009Z" fill="rgba(32,61,240,1)">
            </path>
        </svg>
        <svg onClick={() => deleteComment(item.id)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z" fill="rgba(248,9,9,1)"></path></svg>
    </div>
    </div>
    {editComment ? 
      <AddEditComment
      commentText={commentText}
      setCommentText={setCommentText}
      loading2={loading3}
      addComment={update}
      title="Update"
      />
    :<div>
        <p className='p-1'>
            {item?.body}
        </p>
    </div>}
</div>
  )
}

export default CommentDetails