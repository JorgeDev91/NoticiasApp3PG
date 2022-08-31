import React from "react";

export const AlertMessage = () => {
  return (
    <>
        <div
            className="alert alert-danger mt-4 d-flex justify-content-center "
            role="alert"
        >
            This user doesn't exist !
        </div>
    </>
  );
};
