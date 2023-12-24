import React from "react";

const PostIt = ({ color = "yellow", valor }) => {
  return (
    <div
      className={`${color} m-1 d-flex justify-content-center align-items-center text-center`}
    >
      <p className="text-light fs-4 ">{valor}</p>
    </div>
  );
};

export default PostIt;
