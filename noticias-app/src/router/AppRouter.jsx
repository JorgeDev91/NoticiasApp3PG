import { Route, Routes } from "react-router-dom"

import { AboutPage } from "../about/pages/AboutPage"
import { Header } from "../ui"
import { LoginPage } from "../auth"
import { NoticiasRoutes } from "../noticias"
import { SearchPage } from "../search/pages/SearchPage"




export const AppRouter = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="login" element = { <LoginPage /> } />
            <Route path="about" element = { <AboutPage /> } />
            <Route path="search" element = { <SearchPage /> } />
            <Route path="/*" element = { <NoticiasRoutes /> } />
        </Routes>
    </>
  )
}
