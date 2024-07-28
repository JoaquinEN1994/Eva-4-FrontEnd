import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { HomePage } from "../pages/HomePage"
import { DCPage } from "../pages/DCPage"
import { MarvelPage } from "../pages/MarvelPage"
import { Footer } from "../../ui/components/Footer"
import { DescriptionPage } from "../pages/DescriptionPage"
import { HeroesPage } from "../pages/HeroesPage"





export const SuperHeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element= {<Navigate to ="/home"/>}/>
            <Route path="home" element={<HomePage />} />
            <Route path="dc" element={<DCPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="description" element={<DescriptionPage />}/>
            <Route path="/heroes/:id" element={<HeroesPage />}/>
        </Routes>
        <Footer/>

    </>
  )
}
