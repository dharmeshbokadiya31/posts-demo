import React from "react";
import { useState } from "react";
import { updatePost } from "../../services/post";
import { TableButton } from "../Common/Buttons";
import DeleteModal from "../ConfirmationModal/DeleteModal";
import EditPostModal from "../../components/home/EditPostModal";
import Loader from "../Common/Loader";
const HeaderFields = [
  "Id",
  "Title",
  "Body",
  "Tags",
  "Actions"
];

const dataField = [
  "id",
  "title",
  "body",
  "tags"
];

export default function Table(props) {
  const [showModal, setShowModal] = useState(false);
  const [postData, setPostData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState(null);
  return (
    <>
      {showModal ? (
        <EditPostModal
          setShowModal={setShowModal}
          title="Edit Post"
          postData={postData}
          setPostData={setPostData}
          updatePostData={updatePost}
        />
      ) : (
        ""
      )}
      {showDeleteModal ? (
        <DeleteModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          id={id}
        />
      ) : (
        ""
      )}
      <div
        className={`relative flex flex-col focus:ring-4 focus:outline-none focus:ring-blue-300 ${showDeleteModal || showModal || props?.showModal
          ? "blurBackground"
          : ""
          }`}
      >
        {props.loader && <Loader relative />}
        <div className="overflow-x-auto  border rounded-lg m-6">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {HeaderFields.map((ele) => {
                      return (
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                        >
                          {ele}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {props.data.map((ele, index) => {
                      return (
                      <>
                        <tr>
                          {dataField.map((i) => {
                            return (
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                {i === "id" ? 
                                  ((props.page - 1) * 10 + index + 1) 
                                  : i === "tags" ? 
                                  <>
                                    {ele[i].map(tag => 
                                      <span className="bg-blue-200 text-blue-800 py-1 px-2 rounded-full text-xs mr-2">{tag.label}</span>
                                    )}
                                  </>
                                  : ele[i]}
                              </td>
                            );
                          })}
                          <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                            <TableButton
                              onClick={() => {
                                setShowModal(true);
                                setPostData(ele);
                              }}
                              className="green"
                              title="Edit"
                              type="button"
                            />
                          </td>
                          <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                            <TableButton
                              onClick={() => {
                                setShowDeleteModal(true);
                                setId(ele.id);
                              }}
                              className="red"
                              title="Delete"
                              type="button"
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
