import { useState } from "react";
import { fetchPostCommentData, addComments, deleteComment, updateCommentDetail } from "../services/comments";
import { useLocation } from "react-router-dom";

export const useCommentHook = () => {
    const location = useLocation()
  const [commentData, setCommentData] = useState([]);
  const [showComments, setShowComments] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [commentText, setCommentText] = useState("");

  const getComments = async (id) => {
    try {
      await setLoading(true)
      await fetchPostCommentData(id).then((res) => {
        setCommentData(res.comments)
      })
    }
    catch (error) {
      // console.log(error)
    } finally {
        setLoading(false)
    }
  }

  const addComment = async (postId) => {
    const userId = location?.pathname?.split('/')?.[2]
    if (userId && postId && commentText) {
        const data = {
            id: commentData?.length + 1,
            body: commentText,
            postId,
            userId,
        }
      await setLoading2(true)
      await addComments(data, setLoading2);
      setCommentText("")
      setCommentData([...commentData, {
        ...data,
        user: {
          username: "Guest User"
        }
      }])
    }
  };

  const deleteCommentItem = async (id) => {
        await deleteComment(id)
        setCommentData(commentData.filter(x => x.id != id))
  }

  const updateComment = async (id, com) => {
     const data = {
      body: com
     }
     await setLoading3(true)
     await updateCommentDetail(id, data, setLoading3)
  }

  const commentSection = (id, count) => {
    setShowComments(!showComments)
    if (count > 0) {
      getComments(id)
    }
  }
  
  return { 
    loading,
    loading2,
    loading3,
    commentData,
    showComments,
    commentText,
    commentSection,
    addComment,
    setCommentText,
    deleteCommentItem,
    updateComment
  };
};

