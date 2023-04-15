import React from 'react'
import Index from '../components/userPosts'
import { useUserPostHook } from '../hooks/userPost';
import Loader from '../components/Common/Loader';
import LayoutWrapper from '../components/Common/LayoutWrapper';
// import { useCommentHook } from '../hooks/comment';

const UserPosts = () => {
    const {
        data,
        loader,
        filter,
        total,
        setFilter,
        setData
    } = useUserPostHook();

    // const { loading, commentData, showComments, setShowComments } = useCommentHook()
    return (
        <>
            {loader && <Loader />}
            <LayoutWrapper />
            <Index
              data={data || []}
              total={total}
              filter={filter}
              loader={loader}
            //   loading={loading}
            //   commentData={commentData}
            //   showComments={showComments}
            //   setShowComments={setShowComments}
              setData={setData}
              setFilter={setFilter}
            />
        </>
    )
}

export default UserPosts