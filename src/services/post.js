const { snackbar } = require("tailwind-toast");
export const fetchPostData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts?limit=${filter.limit}&skip=${filter.page}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const fetchUserPostData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/user/${filter.id}?limit=${filter.limit}&skip=${filter.page}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const deletePost = (id, setLoading) =>
  new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        snackbar()
          .success("", "Post Deleted Successfully")
          .with({
            color: "bg-green-600",
            positionX: "end",
            positionY: "bottom",
            fontColor: "blue",
          })
          .show();

        res.json();
      })
      .then((json) => resolve(json))
      .catch((e) => {
        snackbar()
          .success("", e)
          .with({
            color: "bg-red-400",
            positionX: "end",
            positionY: "bottom",
            fontColor: "blue",
          })
          .show();
          setLoading(false)
        reject(e);
      });
  });

export const updatePost = (id, data, closeModal, setLoading) => {
  new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        snackbar()
          .success("Post Updated Successfully", "")
          .with({
            color: "bg-green-600",
            positionX: "end",
            positionY: "end",
            fontColor: "blue",
          })
          .show();
        closeModal()
      })
      .then((json) => resolve(json))
      .catch((e) => {
        snackbar()
          .success("", e)
          .with({
            color: "bg-red-400",
            positionX: "end",
            positionY: "bottom",
            fontColor: "blue",
          })
          .show();
        setLoading(false)
        reject(e);
        reject(e);
      });
  });
};

export const addPost = (data, closeModal, setLoading) =>
  new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        snackbar()
          .success("Post Added Successfully", "")
          .with({
            color: "bg-green-600",
            positionX: "end",
            positionY: "end",
            fontColor: "blue",
          })
          .show();
        closeModal()
      })
      .then((json) => resolve(json))
      .catch((e) => {
        snackbar()
          .success("", e)
          .with({
            color: "bg-red-400",
            positionX: "end",
            positionY: "bottom",
            fontColor: "blue",
          })
          .show();
        setLoading(false)
        reject(e);
      });
  });
