import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProjectFeed from "../components/ProjectFeed";


export default function Blog() {

    return (<>
    <Container>
        <Row>
            <Col md={8}>
                <h2>Neuigkeiten</h2>
                <hr />
                <p>
                    Aktuell entsteht gerade das PCB Projekt. Das Platinenmacher Community Board.
                </p><p style={{ textAlign: 'center' }}>
                    <img src={process.env.PUBLIC_URL + "/img/pcb.png"} alt="PCB Simulator Bild mit Lötkolbensymbol" /><br />
                    <Link to="pcb">Hier geht es zur Projektseite</Link>
                </p><p>
                    Auf der Seite sind die Bilder gelistet, die schon einmal im Chat gesehen wurden. Die Bilder können mit einfachem Klick in eurem Namen beim Platinenmacher im Chat gepostet werden. Dazu ist ein OAuth Login über Twitch notwendig. Dabei werden weder euer Passwort noch eure Email Adresse an platinenmacher.tech übertragen.
                </p><p>
                    <Button href="https://www.twitch.tv/platinenmacher" style={{marginRight:"var(--bs-gutter-x)"}}>Platinenmacher »</Button>
                
                    <Button href="https://www.twitch.tv/thebrutzler">TheBrutzler »</Button>
                </p>
            </Col>
            <Col md={4}>
                <h2>Links</h2>
                <hr />
                <ListGroup>
                    <ListGroup.Item><a href="https://www.twitch.tv/platinenmacher">Twitch</a></ListGroup.Item>
                    <ListGroup.Item><a href="https://www.youtube.com/channel/UCPyRzwxnI9-pL5-50JkxY5Q">Youtube</a></ListGroup.Item>
                    <ListGroup.Item><a href="https://kurzschluss-blog.de/">Blog</a></ListGroup.Item>
                    <ListGroup.Item><a href="http://kurzschlussjunkies.de/">Podcast</a></ListGroup.Item>
                    <ListGroup.Item><a href="https://github.com/DasBasti">GitHub</a></ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row><Col><h2>Projekte</h2></Col></Row>
    </Container>
    <ProjectFeed />
    </>
    );
}