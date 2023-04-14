import React from 'react'
import Index from '../components/home'
import { useUserPostHook } from '../hooks/userPost';

const Home = () => {
    const { data, total, setFilter, filter, loader } = useUserPostHook();
    return (
        <Index data={data || []} total={total} setFilter={setFilter} filter={filter} loader={loader} />
    )
}

export default Home