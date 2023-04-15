import { useState, useEffect, useCallback } from "react";
import { fetchPostData, fetchSearchPostData, fetchUsersData } from "../services/post";
import { useDebouncedCallback } from 'use-debounce';

export const usePostHook = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [total, setTotal] = useState(50);
  const [users, setUsers] = useState(null);
  const [usersTotal, setUsersTotal] = useState(null);
  const [filter, setFilter] = useState({ limit: 4, page: 0 });
  const [userFilter, setUserFilter] = useState({ limit: 4, page: 0 });
  const [search, setSearch] = useState("")

  const getData = async () => {
    try {
      // await setError('');
      await setLoader(true)
      await fetchPostData(filter).then((res) => {
        setData(data?.concat(res.posts) ?? res.post)
        setTotal(res.total)
      })
    }
    catch (error) {
      // setError(error.message);
    } finally {
      setLoader(false)
    }
  }

  const getUsers = async() => {
    try {
      // await setError('');
      await setLoader2(true)
      await fetchUsersData(filter).then((res) => {
        setUsers(users?.concat(res.users) ?? res.users)
        setUsersTotal(res.total)
      })
    }
    catch (error) {
      // setError(error.message);
    } finally {
      setLoader2(false)
    }
  }

  const getSearchData = useDebouncedCallback(async () => {
    try {
      // await setError('');
      await setLoader(true)
      await fetchSearchPostData(search).then((res) => {
        let postData = res?.posts?.map(x => {
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
      // setError(error.message);
    } finally {
      setLoader(false)
    }
  }, 500)

  useEffect(() => {
    getData()
  }, [filter])

  useEffect(() => {
    getUsers()
  }, [userFilter])

  return { 
    data,
    loader,
    filter,
    total,
    users,
    usersTotal,
    userFilter,
    loader2,
    search,
    setSearch,
    setFilter,
    setUserFilter,
    setData,
    setUsers,
    getSearchData
  };
};

