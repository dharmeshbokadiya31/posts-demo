import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../components/Common/Buttons";
import Pagination from "../../components/Common/Pagination";
import Table from "../../components/Table";
import EditPostModal from "./EditPostModal";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";

const Index = ({ data, setFilter, filter, total, loader }) => {
  const [showModal, setShowModal] = useState(false);
  const [postData, setPostData] = useState([]);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    if (filter.page === 0) {
      setPage(10 / filter.limit);
    } else {
      setPage((filter.page / filter.limit) + 1);
    }
  }, [data, filter]);

  useEffect(() => {
    setDisableNext(false);
    setDisablePrev(false);
    if (page === Math.round(total / 10)) {
      setDisableNext(true);
    }
    if (page === 1) {
      setDisablePrev(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onNextClick = () => {
    if (filter.page) {
      setFilter({
        ...filter,
        page: filter.page + 10
      })
    }
  };
  const onPreviousClick = () => {
    setFilter({
      ...filter,
      page: filter.page - 10
    });
  };
  const changePage = (i) => {
    setFilter({
      ...filter,
      page: i * 10
    });
  };
  
  const logout = () => {
    localStorage.removeItem("userData")
    navigate(routes.posts)
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <h6 className="text-center mt-3 mb-2 text-black-100 text-3xl ml-6">
          User Posts
        </h6>
        <div className="text-right mt-3 mb-2 mr-6 gap-2 flex items-center justify-end">
          <div>
          <PrimaryButton
            className="py-2 px-4 rounded justify-end"
            onClick={() => setShowModal(true)}
            title='Add Post'
          >
          </PrimaryButton>
          </div>
          <div>
          <SecondaryButton
            className="py-2 px-4 rounded justify-end"
            onClick={() => logout()}
            title='Logout'
          >
          </SecondaryButton>
          </div>
        </div>
      </div>
      {showModal ? (
        <EditPostModal
          title="Add Post"
          setPostData={setPostData}
          setShowModal={setShowModal}
          postData={postData}
        />
      ) : null}
      <Table showModal={showModal} data={data} loader={loader} page={page} />
      <div className="float-right mb-6 mr-6">
        <Pagination
          onNextClick={onNextClick}
          disableNext={disableNext}
          disablePrev={disablePrev}
          data={data || []}
          changePage={changePage}
          total={total}
          onPreviousClick={onPreviousClick}
        />
      </div>
    </>
  );
};

export default Index;
