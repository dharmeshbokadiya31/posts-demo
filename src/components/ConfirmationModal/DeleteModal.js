import React, { useState } from "react";
import { deletePost } from "../../services/post";
import { PrimaryButton, SecondaryButton, SubmitButton } from "../Common/Buttons";

const DeleteModal = (props) => {
  const [loading, setLoading] = useState(false)

  const deletePostFunc = async () => {
    await setLoading(true)
    await deletePost(props?.id, setLoading);
    props.setShowDeleteModal(false);
  }

  return (
    <div>
      <div className="flex backDrop justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto h-auto my-6 mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative bg-modal flex flex-col bg-white outline-none focus:outline-none">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <svg
                aria-hidden="true"
                className="mx-auto pt-2 text-gray-400 w-12 h-12 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div className="p-6 bg-white-700 text-center">
                <h3 className="mb-5 text-lg font-normal text-black">
                  Are you sure you want to delete this post?
                </h3>
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b gap-2">
                  <SecondaryButton
                    disabled={loading}
                    title="No,Cancel"
                    onClick={() => props.setShowDeleteModal(false)}
                    type="button"
                  />
                  <PrimaryButton
                    loading={loading}
                    disabled={loading}
                    className="flex items-center gap-2"
                    data-modal-toggle="popup-modal"
                    type="button"
                    onClick={() => deletePostFunc()}
                    title="Yes, I'm sure"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default DeleteModal;
