import { Container } from "react-bootstrap";

export default function Navigation() {
    return (
    <Container>
        <p style={{textAlign:"center"}}>Build {process.env.REACT_APP_BUILD_TIME}</p>
    </Container>
    );
}