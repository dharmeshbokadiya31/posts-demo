import React from 'react'
import Index from '../components/post'
import { usePostHook } from '../hooks/post';
import Loader from '../components/Common/Loader';
import LayoutWrapper from '../components/Common/LayoutWrapper';

const Posts = () => {
    const {
        data,
        total,
        filter,
        loader,
        users,
        usersTotal,
        userFilter,
        loader2,
        search,
        setFilter,
        setUserFilter,
        setData,
        setUsers,
        setSearch,
        getSearchData
    } = usePostHook();
    return (
        <>
            {(loader || loader2) && <Loader />}
            <LayoutWrapper />
            <Index
              data={data || []}
              total={total}
              filter={filter}
              users={users}
              usersTotal={usersTotal}
              userFilter={userFilter}
              loader={loader}
              loader2={loader2}
              search={search}
              setData={setData}
              setFilter={setFilter}
              setUserFilter={setUserFilter}
              setUsers={setUsers}
              setSearch={setSearch}
              getSearchData={getSearchData}
            />
        </>
    )
}

export default Posts