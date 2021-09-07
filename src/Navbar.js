import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./island.png";

const NavbarElement = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    React Bootstrap
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="aboutme">About Me</Nav.Link>
                    <Nav.Link href="milestones">Milestones</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarElement;
