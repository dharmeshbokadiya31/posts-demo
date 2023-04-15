import { API_BASE_URL } from "../constants/constant";

const { snackbar } = require("tailwind-toast");

let successMessage = (msg) => {
  snackbar()
  .success("", msg)
  .with({
    color: "bg-green-600",
    positionX: "end",
    positionY: "bottom",
    fontColor: "blue",
  })
  .show();
}

let errorMessage = (e) => {
  snackbar()
  .danger("", e)
  .with({
    color: "bg-red-400",
    positionX: "end",
    positionY: "bottom",
    fontColor: "blue",
  })
  .show();
}

export const fetchPostData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts?limit=${filter.limit}&skip=${filter.page}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const fetchUserPostData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/user/${filter.id}?limit=${filter.limit}&skip=${filter.page}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const deletePost = (id, setLoading) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        successMessage("Post Deleted Successfully")
        res.json();
      })
      .then((json) => resolve(json))
      .catch((e) => {
          errorMessage(e)
          setLoading(false)
        reject(e);
      });
  });

export const updatePost = (id, data, closeModal, setLoading) => {
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        successMessage("Post Updated Successfully")
        closeModal()
      })
      .then((json) => resolve(json))
      .catch((e) => {
        errorMessage(e)
        setLoading(false)
        reject(e);
        reject(e);
      });
  });
};

export const addPost = (data, closeModal, setLoading) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        successMessage("Post Added Successfully")
        closeModal()
      })
      .then((json) => resolve(json))
      .catch((e) => {
        errorMessage(e)
        setLoading(false)
        reject(e);
      });
  });

export const fetchSearchPostData = (query) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/search?q=${query}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

  export const fetchUsersData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/users?limit=${filter.limit}&skip=${filter.page}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });