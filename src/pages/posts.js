import React from 'react'
import Index from '../components/post'
import { usePostHook } from '../hooks/post';
import Loader from '../components/Common/Loader';
import LayoutWrapper from '../components/Common/LayoutWrapper';

const Posts = () => {
    const { data, total, setFilter, filter, loader } = usePostHook();
    return (
        <>
            {loader && <Loader />}
            <LayoutWrapper />
            <Index data={data || []} total={total} setFilter={setFilter} filter={filter} />
        </>
    )
}

export default Posts