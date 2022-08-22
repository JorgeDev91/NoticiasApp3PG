import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { BusinessPage, EntertainmentPage, GeneralPage, HealthPage, SciencePage, SportsPage, TechnologyPage } from '../pages'


export const NoticiasRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Routes>
              <Route path="business" element={< BusinessPage/>} />
              <Route path="entertainment" element={<EntertainmentPage />} />
              <Route path="general" element={<GeneralPage />} />
              <Route path="health" element={<HealthPage />} />
              <Route path="science" element={<SciencePage />} />
              <Route path="sports" element={<SportsPage />} />
              <Route path="technology" element={<TechnologyPage />} />

              <Route path="/*" element={<GeneralPage />} />
          </Routes>

        </div>
    </>
  )
}
