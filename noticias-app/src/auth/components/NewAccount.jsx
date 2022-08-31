
import React from 'react'
import { useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/slices/auth/thunks';

export const NewAccount = ({ setshowLogin }) => {

  const { register, handleSubmit, formState: { errors }  } = useForm();
  const dispatch = useDispatch();

  const {status} = useSelector( state => state.auth ); // mando a traer es estado de authenticated, no-authenticated o checking
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const onSubmit = (data) => {

    document.getElementById('inputName').value = "";         //limpio el textbox del Name
    document.getElementById('inputEmail').value = "";        //limpio el textbox del email
    document.getElementById('inputPassword').value = "";      // limpio el textbox de password

    setshowLogin(true)

    dispatch( startCreatingUserWithEmailPassword( data.inputEmail, data.inputPassword, data.inputName));
    
    
  };

  return (
    <>
    
            <div style={{overflow: 'hidden'}}>
                <div className='container border border-secondary rounded animate__animated animate__backInUp p-3 mt-5 w-75'> 

                
                  <div
                      className='bg-light text-black d-flex justify-content-center py-2 mb-3 rounded'
                  >
                    Crear Cuenta
                  </div>    
                
                    <form>

                      <div className="form-group">
                        <label className='mb-1'>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputName" 
                            placeholder="Full Name" 
                            aria-invalid={errors.inputName ? "true" : "false"}
                            {...register("inputName", { required: true } )}
                        />
                        {errors.inputName && errors.inputName.type === "required" && 
                        (<span role="alert" className='text-danger'>We need your Name to register you</span>)}
                        
                      </div>

                      <div className="form-group">
                        <label className='mb-1'>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail" 
                            placeholder="example@email.com" 
                            aria-invalid={errors.inpuEmail ? "true" : "false"}
                            {...register("inputEmail", { required: true } )}
                        />
                        {errors.inputEmail && errors.inputEmail.type === "required" && 
                        (<span role="alert" className='text-danger'>We need your Email to register you</span>)}
                        
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            id="inputPassword" 
                            aria-invalid={errors.inputPassword ? "true" : "false"}
                            {...register("inputPassword", { required: true } )}
                        />
                      </div>
                      {errors.inputPassword && errors.inputPassword.type === "required" && 
                        (<span role="alert" className='text-danger'>We need a valid Password to register you</span>)}

                      <div className="row mt-3 justify-content-center mt-4">
                        <button 
                            disabled = { isCheckingAuthentication }
                            className="btn btn-secondary w-50"
                            onClick={handleSubmit(onSubmit)}
                        > Crear cuenta</button>
                      </div>


                    </form>

                      <div className='d-flex w-100 justify-content-end mt-5'>
                        
                        <label 
                            name='labelIngresar' 
                            className='font-weight-light'
                            onClick={ () => setshowLogin(true)} 
                        >¿Ya tienes una cuenta? Ingresar</label>
                      </div>
                </div>
            </div>

    </>
  )
}
