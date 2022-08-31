

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startLogOut } from '../../store/slices/auth/thunks';


export const LogOutButton = () => {

    const { displayName} = useSelector( state => state.auth );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const onLogOut = () => {
        dispatch( startLogOut() );
        navigate('/general', { replace: true});
    }

  return (
    <>
      <div className='d-flex justify-content-end'>

          <div className='d-inline-flex mx-3 mt-2'>
              <h5 className="card-title">{ displayName}</h5>     
          </div>

          <button
            className="btn btn-outline-secondary d-inline-flex material-symbols-rounded"
            onClick={onLogOut}
          >
            <span class="material-symbols-outlined">
              logout
            </span>
          </button>

      </div>
    </>
  )
}
