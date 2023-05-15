import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErroPage } from "../pages/ErroPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { MenuApp } from "../components/menu";
import { Rodape } from "../components/rodape";

export function RouterApp() {
    return (
        <BrowserRouter>
            <MenuApp />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="*" element={<ErroPage />} />
            </Routes>
            <Rodape />
        </BrowserRouter> 
    )
}