import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Pagination = ({ onNextClick, disableNext, total, disablePrev, changePage, onPreviousClick }) => {
  const [count, setCount] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < Math.round(total / 10); i++) {
      arr.push(i);
    }
    setCount(arr?.length ? arr : [0]);
  }, [total]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            disabled={disablePrev}
            onClick={onPreviousClick}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {count.map((ele) => {
          return (
            <li key={ele}>
              <button
                onClick={() => changePage(ele)}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {ele + 1}
              </button>
            </li>
          );
        })}
        <li>
          <button
            disabled={disableNext}
            onClick={onNextClick}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
