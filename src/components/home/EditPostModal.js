import React, { useState } from "react";
import { addPost } from "../../services/post";
import { SecondaryButton, SubmitButton } from "../Common/Buttons";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { Dropdown } from "../Common/Select/Select";

const EditPostModal = (props) => {
  const { postData, setShowModal, setPostData, updatePostData, title } = props;
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);

  const handleOnchange = (key, value) => {
    setPostData({
      ...postData,
      [key]: value,
    });
  };

  const handleTagsOnchange = (key, value) => {
    setPostData({
      ...postData,
      [key]: value.map(x => x.value),
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setLoading(false)
    setPostData({})
    
  }

  const onEditSubmit = (id) => {
    if (validate()) {
      setLoading(true)
      updatePostData(id, postData, closeModal, setLoading)
    }
  };

  const validate = () => {
    let obj = {};
    if (!postData?.title) {
      obj["title"] = "Title is required";
    }
    if (!postData?.body) {
      obj["body"] = "Body is required";
    }
    if (!postData?.tags?.length) {
      obj["tags"] = "Tags is required";
    }
    setMsg(obj);
    if (Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  };

  const onAddNewPost = async (data) => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    if(userData) {
      data.userId = userData.id
    }
    if (validate()) {
      setLoading(true)
      addPost(data, closeModal, setLoading);
    }
  };

  return (
    <>
      <div className="flex justify-center backDrop items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto lg:w-2/5 sm:w-full xl:w-2/5 md:w-2/3">
          <div className="rounded-lg shadow-lg relative bg-white-700 flex flex-col bg-white  focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid  rounded-t ">
              <h3 className="text-3xl text-black font=semibold">{title}</h3>
              <SecondaryButton
                className="text-black text-xl float-right"
                onClick={() => setShowModal(false)}
                title="X"
              />
            </div>
            <div className="relative p-6 flex-auto">
              <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                <Input
                  label="Title"
                  type="text"
                  name="title"
                  labelClass='block text-black mlabel text-sm mb-1 w-1/3'
                  inputWrapperClass='flex items-center'
                  required
                  placeholder="Enter Title"
                  value={postData.title}
                  onChange={(e) =>
                    handleOnchange("title", e.target.value)
                  }
                  className="shadow my-2 appearance-none border rounded w-full py-2 px-1 text-black"
                />
                <p className="text-xs text-red">{msg?.title}</p>
                <Textarea
                  label="Body"
                  type="text"
                  name="body"
                  labelClass='block text-black mlabel text-sm mb-1 w-1/3'
                  inputWrapperClass='flex items-center'
                  required={true}
                  placeholder="Enter Body"
                  value={postData.body}
                  onChange={(e) => handleOnchange("body", e.target.value)}
                  className="shadow my-2 appearance-none  border rounded w-full py-2 px-1 text-black"
                />
                <p className="text-xs text-red">{msg?.body}</p>
                <Dropdown
                  placeholder="Select Tag"
                  label="Tags"
                  name="tags"
                  labelClass='block text-black mlabel text-sm mb-1 w-1/3'
                  inputWrapperClass='flex items-center'
                  value={postData.tags}
                  onChange={(value) => 
                    handleTagsOnchange("tags", value)
                  }
                />
                <p className="text-xs text-red">{msg?.tags}</p>
              </form>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <SecondaryButton
                disabled={loading}
                title="Close"
                type="button"
                onClick={() => {
                  setShowModal(false);
                }}
              />
              <SubmitButton
                loading={loading}
                disabled={loading}
                title="Submit"
                type="button"
                className='gap-2 flex items-center'
                onClick={() =>
                  title === "Edit Post"
                    ? onEditSubmit(postData.id)
                    : onAddNewPost(postData)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40  bg-black"></div>
    </>
  );
};

export default EditPostModal;
