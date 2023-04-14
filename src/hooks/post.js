import { useState, useEffect } from "react";
import { fetchPostData } from "../services/post";

export const usePostHook = () => {
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
      await setError('');
      await setLoader(true)
      await fetchPostData(filter).then((res) => {
        setData(res.posts)
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

