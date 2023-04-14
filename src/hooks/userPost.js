import { useState, useEffect } from "react";
import { fetchUserPostData } from "../services/post";

export const useUserPostHook = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(50);
  const [filter, setFilter] = useState({
    limit: 10,
    page: 0,
  });

  const getData = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"))
      if(userData) {
        filter.id = userData.id
      }
      await setError('');
      await setLoader(true)
      await fetchUserPostData(filter).then((res) => {
        let postData = res.posts.map(x => {
           return {
            ...x,
            tags: x.tags.map(y => {
                return { value: y, label: y}
            })
           }
        })
        setData(postData)
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

  return { data, error, loader, filter, setFilter, total };
};

