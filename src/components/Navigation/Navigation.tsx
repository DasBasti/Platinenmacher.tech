import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { isLoggedIn, client_id, response_type, redirect_uri, scope, getUsername } from '../../helper/login';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Navigation() {
    return (
        <Navbar expand="lg" fixed="top" >
            <Container>
                <Navbar.Brand href="/">
                    <img src={process.env.PUBLIC_URL + "/img/CHIPlogo.png"} alt="Chip Logo" width={64}/>{' '}
                    Der Platinenmacher</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="me-auto">
                        <Nav.Link href="/projekte">Projekte</Nav.Link>
                        <Nav.Link href="/community">Community Board</Nav.Link>
                        <Nav.Link href="/panel">LED Matrix</Nav.Link>
                        <Nav.Link href="/navi">India Navi</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.twitch.tv/platinenmacher"><FontAwesomeIcon icon={faTwitch as IconProp} />Twitch</Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCPyRzwxnI9-pL5-50JkxY5Q"><FontAwesomeIcon icon={faYoutube as IconProp} />Youtube</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="/impressum">Impressum</Nav.Link>
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