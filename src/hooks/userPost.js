import { useState, useEffect } from "react";
import { fetchUserPostData } from "../services/post";
import { useLocation } from "react-router-dom";
import { LIMIT } from "../constants/constant";

export const useUserPostHook = () => {
  const location = useLocation()
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(50);
  const [filter, setFilter] = useState({
    limit: LIMIT,
    page: 0,
  });

  const getData = async () => {
    try {
      const userData = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"))
      const userId = location?.pathname?.split('/')?.[2]
      if(userData) {
        filter.id = userData.id
      }
      if (userId) {
        filter.id = userId
      }
      await setError('');
      await setLoader(true)
      await fetchUserPostData(filter).then((res) => {
        let postData = res?.posts?.map(x => {
          return {
            ...x,
            tags: x.tags.map(y => {
              return { value: y, label: y}
            })
          }
        })
        setData(userData?.id ? postData : data?.concat(postData) ?? postData)
        setTotal(res.total)
      })
    }
    catch (error) {
      setError(error.message);
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getData()
  }, [filter])

  return { data, loader, filter, setFilter, total, setData };
};

