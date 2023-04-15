import React from 'react'
import Index from '../components/userPosts'
import { useUserPostHook } from '../hooks/userPost';
import Loader from '../components/Common/Loader';
import LayoutWrapper from '../components/Common/LayoutWrapper';

const UserPosts = () => {
    const {
        data,
        loader,
        filter,
        total,
        setFilter,
        setData
    } = useUserPostHook();

    return (
        <>
            {loader && <Loader />}
            <LayoutWrapper />
            <Index
              data={data || []}
              total={total}
              filter={filter}
              loader={loader}
              setData={setData}
              setFilter={setFilter}
            />
        </>
    )
}

export default UserPosts