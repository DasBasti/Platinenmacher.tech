import { Container } from "react-bootstrap";

export default function Navigation() {
    return (
    <footer className="site-footer">
        <Container>
            <span><span className="ok">●</span> Build {process.env.REACT_APP_BUILD_TIME}</span>
            <a href="/impressum">Impressum</a>
        </Container>
    </footer>
    );
}
