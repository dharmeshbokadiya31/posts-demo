import React from 'react';
import PostDetails from './postDetails';
import UserDetails from './userDetails';
import { Input } from '../Input';
import { SHORT_LIMIT } from '../../constants/constant';

const Index = ({
  data,
  total,
  filter,
  setFilter,
  setUserFilter,
  setData,
  setUsers,
  users,
  usersTotal,
  userFilter,
  loader,
  loader2,
  search,
  setSearch,
  getSearchData
}) => {
  const showMoreBlogs = () => {
    setFilter({
      ...filter,
      page: filter.page + SHORT_LIMIT
    });
  }

  const showMoreUsers = () => {
    setUserFilter({
      ...userFilter,
      page: userFilter.page + SHORT_LIMIT
    });
  }

  return (
    <>
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-8 col-span-12">
              <div className='flex flex-col items-center justify-between md:flex-row'>
              <h1 className="w-full text-3xl font-bold mb-6">Recent Posts</h1>
              <div className='w-full block mb-2'>
                <Input
                  type="text"
                  name="search"
                  autoComplete="search"
                  required={true}
                  placeholder="Search Posts"
                  value={search}
                  labelClass='sr-only'
                  onChange={(e) => {
                    setSearch(e.target.value)
                    getSearchData()
                  }}
                />
              </div>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data?.length ? data?.map(item =>
                <PostDetails
                  item={item}
                  data={data}
                  setData={setData}
                />
              ) : !loader && "NO POST FOUND"}
            </div>
            {data?.length && data?.length < total ? <button
              onClick={() => showMoreBlogs()}
              className="flex justify-center my-6 mx-auto border border-indigo-500 hover:bg-indigo-500 bg-transparent font-semibold text-indigo-500 hover:text-white transition py-2 px-4 rounded"
            >
              View More
            </button> : ""}
          </div>
          <div className="lg:col-span-4 col-span-12">
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            {users?.length ? users?.map(item =>
              <UserDetails
                item={item}
                users={users}
                setUsers={setUsers}
              />
            ) : !loader2 && "NO USERS FOUND"}
            {users?.length && users?.length < usersTotal ? <button
              onClick={() => showMoreUsers()}
              className="flex justify-center my-6 mx-auto border border-indigo-500 hover:bg-indigo-500 bg-transparent font-semibold text-indigo-500 hover:text-white transition py-2 px-4 rounded"
            >
              View More
            </button> : ""}
          </div>
        </div>
      </main>
    </>
  )
}

export default Index