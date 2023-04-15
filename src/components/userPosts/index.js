import React from 'react';
import UserPostDetails from './userPostDetail';

const Index = ({
  data,
  total,
  filter,
  setFilter,
  setData,
  loader,
}) => {
  const showMoreBlogs = () => {
    setFilter({
      ...filter,
      page: filter.page + 4
    });
  }

  return (
    <>
      <main className="container mx-auto py-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-12 col-span-12">
            <h1 className="text-3xl font-bold mb-6">User Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data?.length ? data?.map(item =>
                <UserPostDetails
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
        </div>
      </main>
    </>
  )
}

export default Index