import { Link } from "react-router-dom";
import { Container, Nav } from "./style";

export function MenuApp() {
    return (
        <Container>
            <div>
                Area Logo
            </div>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Cadastro</Link>
            </Nav>
        </Container>
    )
}