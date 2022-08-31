
import { loginWithEmailPassword, logOutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials());
    } 
}

export const startGoogleSignIn = () => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();

        if ( !result.ok ) { return dispatch( logout( result.errorMessage) )} // Si la autenticación falla hace esto

        dispatch( login( result ) ); // si la autenticación es exitosa se llama al login
    }
}

export const startCreatingUserWithEmailPassword = (  email, password, displayName ) => {

    return async( dispatch) => {
        dispatch( checkingCredentials() );
        
        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword(  email, password, displayName );
        
        if (!ok) return dispatch( logout( {errorMessage} ) ) // si hay un error se muestra el mensaje

        dispatch( login( { uid, displayName, email, photoURL} ) ); // si todo salió bien, se hace el login
    }
}

export const startLoginWithEmailPassword = ( email, password) => {

    return async(dispatch) => {

        dispatch( checkingCredentials());

        const result = await loginWithEmailPassword( email, password );
        console.log(result)

        if ( !result.ok ) { return dispatch( logout( result) )} // Si la autenticación falla hace esto

        dispatch( login( result ) ); // si la autenticación es exitosa se llama al login

    }

}

export const startLogOut = () => {
    return async(dispatch) => {

        await  logOutFirebase();
        dispatch( logout() );
    }
}

