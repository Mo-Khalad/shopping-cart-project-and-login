import React from "react";
const Error = ({ error }) => {
  return (
    <div className="error d-flex justify-content-center align-items-center">
      <h2 className="errorText d-flex justify-content-center align-items-center w-50 fs-5">
        {error}
      </h2>
    </div>
  );
};
export default Error;
