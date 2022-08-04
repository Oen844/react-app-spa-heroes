import { Route, Routes, Navigate } from "react-router-dom";

import { LoginPage } from "../auth";
import {DcPage, MarvelPages} from '../heroes';
import { Navbar } from "../ui/components"

export const AppRouter = () => {
    return (
        <>

        <Navbar/>
            <Routes>
                <Route path="marvel" element={<MarvelPages />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/marvel" />} />

            </Routes>

        </>
    )
}
