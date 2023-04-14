import React, { useState,useEffect } from 'react';
import Pagination from '../Common/Pagination';

const Index = ({
    data,
    total,
    filter,
    setFilter
}) => {
    const [disableNext, setDisableNext] = useState(false);
    const [disablePrev, setDisablePrev] = useState(false);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
        if (filter.page === 0) {
          setPage(10 / filter.limit);
        } else {
          setPage((filter.page / filter.limit) + 1);
        }
      }, [data, filter]);
    
      useEffect(() => {
        setDisableNext(false);
        setDisablePrev(false);
        if (page === Math.round(total / 10)) {
          setDisableNext(true);
        }
        if (page === 1) {
          setDisablePrev(true);
        }
      }, [page]);
    
      const onNextClick = () => {
        if (filter.page) {
          setFilter({
            ...filter,
            page: filter.page + 10
          })
        }
      };
      const onPreviousClick = () => {
        setFilter({
          ...filter,
          page: filter.page - 10
        });
      };
      const changePage = (i) => {
        setFilter({
          ...filter,
          page: i * 10
        });
      }

  return (
    <>
        <main className="container mx-auto py-6">
            <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {data?.map(item => 
                    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full" key={item.id}>
                        <img src="https://picsum.photos/600/400" alt="Post Image" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="font-bold text-2xl mb-2"><a href="#">{item.title}</a></h2>
                            <div className="mb-2">
                                {item.tags.map(tag => 
                                   <span className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs mr-2">{tag}</span>
                                )}
                            </div>
                            <p className="text-gray-700">{item.body}</p>
                        </div>
                            <div className="flex justify-between items-center p-4 mt-auto">
                            <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="currentColor"
                                className="h-6 w-6 text-gray-500"
                                >
                                    </path>
                                    </svg>
                                <span className="text-gray-500">{item.reactions} Likes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 7a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm2-2a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H5z" clip-rule="evenodd" />
                                </svg>
                                <span className="text-gray-500">8 Comments</span>
                            </div>
                            </div>
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-6 mb-6">
                <Pagination
                onNextClick={onNextClick}
                disableNext={disableNext}
                disablePrev={disablePrev}
                data={data || []}
                changePage={changePage}
                total={total}
                onPreviousClick={onPreviousClick}
                />
            </div>
        </main>
    </>
  )
}

export default Index