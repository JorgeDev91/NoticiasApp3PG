import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/slices/auth/thunks';
import { AlertMessage } from './AlertMessage';
import { useNavigate } from 'react-router-dom';


export const LogInForm = ({ setshowLogin }) => {

  const { register, handleSubmit, formState: { errors }  } = useForm();
  
  const { status, errorMessage } = useSelector( state => state.auth);   // desde el store verifico el valor de autenticación, si es checking... etc
  const dispatch = useDispatch();  
  const navigate = useNavigate();
  
  //  Formulario y login con correo y password
  const onSubmit = (data) => {

    document.getElementById('inputEmail').value = "";         //limpio el textbox del email
    document.getElementById('inputPassword').value = "";      // limpio el textbox de password

    dispatch( startLoginWithEmailPassword( data.inputEmail, data.inputPassword));
    if ( status === 'authenticated') {
      navigate('/general', { replace: true});
    }
  };
  
  // si esta en checking, va a deshabilitar los botones del login usando la propiedad disable de los botones
  const isAuthenticating = useMemo(() => status === 'checking', [status]); 
  
  // Lanza el googleSignIn 
  const handleGoogleSignIn = (event) => {
    
    event.preventDefault();

    dispatch( checkingAuthentication() );
    dispatch( startGoogleSignIn() );   
  }

  // Si esta autenticado no debe entrar al login y lo re-dirige a /generl
  // Si se loguea exitosamente redirecciona a /general

  const authenticated = useMemo( () => status === 'authenticated',[status]);
    
  useEffect(() => {
    if(authenticated){

      navigate('/general', { replace: true});
    }

  }, [authenticated, navigate]);
  
  

  
  
  return (
    <>
    
            <div style={{overflow: 'hidden'}}>
                <div className='container border border-secondary rounded animate__animated animate__backInUp p-3 mt-5 w-75'>   

                  <div
                      className='bg-light text-black d-flex justify-content-center py-2 mb-3 rounded'
                  >
                    <h5> Login </h5> 
                  </div>

                  <form >

                    <div className="form-group">
                      <label className='mb-1'>Email address</label>
                      <input 
                        type="email" 
                        className="form-control mb-3" 
                        id="inputEmail" 
                        placeholder="Enter email" 
                        aria-invalid={errors.inputEmail ? "true" : "false"}
                        {...register("inputEmail", { required: true } )}
                      />
                      {errors.inputEmail && errors.inputEmail.type === "required" && 
                        (<span role="alert" className='text-danger'>We need your Email to log you in</span>)}

                    </div>

                    <div className="form-group">

                      <label>Password</label>

                      <input 
                        type="password" 
                        className="form-control" 
                        id="inputPassword" 
                        placeholder="Password" 
                        aria-invalid={errors.inputPassword ? "true" : "false"}
                        {...register("inputPassword", { required: true } )}  
                      />

                      {errors.inputPassword && errors.inputPassword.type === "required" &&
                         (<span role="alert" className='text-danger'>Password is required</span>)}
                    </div>

                    {
                      (!!errorMessage)
                        ? <AlertMessage />
                        : <></>
                    }

                    <div className="row d-flex justify-align-center mt-5">

                      <div className="col d-flex justify-content-center">    
                        <button 
                            type="submit" 
                            disabled = {isAuthenticating}
                            className="btn btn-secondary mt-2 w-100" 
                            onClick={handleSubmit(onSubmit)}
                        >Login</button>
                      </div>

                      <div className="col d-flex justify-content-center">
                        <button 
                            disabled = {isAuthenticating}
                            className="btn btn-secondary mt-2 w-100" 
                            onClick={ handleGoogleSignIn }
                        >Google</button>
                      </div>

                    </div>

                  </form>
                    

                    <div className=" d-flex justify-content-end mt-5 w-100">
                      <label 
                          
                          disabled = {isAuthenticating}
                          onClick={ () => setshowLogin(false)} 
                          
                      > Create an account</label>
                    </div>

                </div>
            </div>
    
    </>
  )
}
