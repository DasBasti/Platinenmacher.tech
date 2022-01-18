import { Container, Nav, Navbar } from 'react-bootstrap';
import { isLoggedIn, client_id, response_type, redirect_uri, scope, getUsername } from '../../helper/login';

export default function Navigation() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">Der Platinenmacher</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/projekte">Projekte</Nav.Link>
                        <Nav.Link href="/pcb">Community Board</Nav.Link>
                        <Nav.Link href="/matrix">LED Matrix</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.twitch.tv/platinenmacher">Twitch</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCPyRzwxnI9-pL5-50JkxY5Q">Youtube</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {isLoggedIn() ?
                    <Nav.Link href={"/logout"}>Logout {getUsername()}</Nav.Link>
                    :
                    <Nav.Link href={"https://id.twitch.tv/oauth2/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type="+response_type+"&scope="+scope.join(" ")}>Login with Twitch</Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}