import { useState } from "react"
import { LogInForm } from "../components/LogInForm";
import { NewAccount } from "../components/NewAccount";


export const LoginPage = () => {

  const [showLogin, setshowLogin] = useState(true);

  return (
    <>

      {
        showLogin
          ?  <LogInForm setshowLogin = { setshowLogin }/>

          :  <NewAccount setshowLogin = { setshowLogin }/>
      }


    </>
  )
}
