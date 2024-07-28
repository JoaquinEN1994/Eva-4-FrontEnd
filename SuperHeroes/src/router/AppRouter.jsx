import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { SuperHeroesRoutes } from '../superheroes/routes/SuperHeroesRoutes';



export const AppRouter = () => {
  return (
    <>
            <Routes>
                <Route path="/*" element= {<SuperHeroesRoutes/>}/>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
    </>
  )
}
