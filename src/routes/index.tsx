import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../components/abc/mega";
import Menu from "../components/Menu";
import Quina from "../components/abc/quina";
import Timemania from "../components/abc/time";

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