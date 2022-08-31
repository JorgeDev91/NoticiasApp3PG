import { Route, Routes } from "react-router-dom"



import { AboutPage } from "../about/pages/AboutPage"
import { Header } from "../ui"
import { LoginPage } from "../auth"
import { NoticiasRoutes } from "../noticias"
import { SearchPage } from "../search/pages/SearchPage"
import { Cheking } from "../ui/components/Cheking";
import { useCheckAuth } from "../hooks/useCheckAuth"





export const AppRouter = () => {

  const status = useCheckAuth(); // hook para checar si esta autenticado o no antes de proceder a las rutas


   if (status === 'checking') {
     return <Cheking />
   } 

  return (
    <>
        <Header />
        <Routes>
          <Route path="/*" element = { <NoticiasRoutes /> } />
          <Route path="about" element = { <AboutPage /> } />
          <Route path="search" element = { <SearchPage /> } />
          <Route path="login" element = { <LoginPage /> } />            
        </Routes>
    </>
  )
}
