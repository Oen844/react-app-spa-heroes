import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes';
// import { Navbar } from "../ui/components"
import { Navbar } from "../ui/components";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <>


            <Routes>
                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }
                />

                {/* <Route path="/*" element={ <HeroesRoutes />} />                */}
            </Routes>

        </>
    )
}
