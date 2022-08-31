

import React from "react";
import { useNavigate } from 'react-router-dom';

export const LogInButton = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/login', { replace: true});
    }

  return (
    <>
      <button
        className="btn btn-outline-secondary my-2 my-sm-0 mr-3"
        onClick={onLogin}
      >
        Login
      </button>
    </>
  );
};
