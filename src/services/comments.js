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

export const fetchPostCommentData = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/comments/post/${id}`)
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const deleteComment = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/comments/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        successMessage("Comment Deleted Successfully")
        res.json();
      })
      .then((json) => resolve(json))
      .catch((e) => {
          errorMessage(e)
          reject(e);
      });
  });

export const updateCommentDetail = (id, data, setLoading) => {
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        setLoading(false)
        successMessage("Comment Updated Successfully")
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

export const addComments = (data, setLoading) =>
  new Promise((resolve, reject) => {
    fetch(`${API_BASE_URL}/posts/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.json();
        successMessage("Comment Added Successfully")
        setLoading(false)
      })
      .then((json) => resolve(json))
      .catch((e) => {
        errorMessage(e)
        setLoading(false)
        reject(e);
      });
  });