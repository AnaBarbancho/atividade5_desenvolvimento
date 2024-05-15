import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../components/Megasena";
import Menu from "../components/Menu";
import Quina from "../components/Quina";

import Timemania from "../components/Timemania";

export default function Rotas(){
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/quina" element={<Quina />} />
                <Route path="/timemania" element={<Timemania />} />
            </Routes>
        </BrowserRouter>
    );
}