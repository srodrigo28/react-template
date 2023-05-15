import { Outlet } from "react-router-dom";
import { MenuApp } from "../menu";
import { Container } from "./style";

interface IpropsLayout{
    children: React.ReactNode
}

export function Exemlo( {children} : IpropsLayout) {
    <Container>
        <MenuApp />
        {children}
        <Outlet />
    </Container>
}