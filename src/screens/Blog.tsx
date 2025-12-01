import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faYoutube, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProjectFeed from "../components/ProjectFeed";
import { IconProp } from "@fortawesome/fontawesome-svg-core";



export default function Blog() {

    return (<>
    <Container>
        <Row>
            <Col md={8}>
                <h2>Neuigkeiten</h2>
                <hr />
                <p>
                    Ich befinde mich zur Zeit in einer Phase in der ich neben dem Job ein Fernstudium absolviere. Deshalb habe ich den Streaming Kanal pausiert.
                    Sobald ich mein Master in der Tasche habe sehen wir uns wieder regelmäßig. 👀
                </p>
                <h2>Community Board</h2>
                <p style={{ textAlign: 'center' }}>
                    <img src={process.env.PUBLIC_URL + "/img/pcb.png"} alt="PCB Simulator Bild mit Lötkolbensymbol" /><br />
                    <Link to="community">Hier geht es zur Community Board Projektseite</Link>
                </p><p>
                    Auf der Seite sind die Bilder gelistet, die schon einmal im Chat gesehen wurden. Die Bilder können mit einfachem Klick in eurem Namen beim Platinenmacher im Chat gepostet werden. Dazu ist ein OAuth Login über Twitch notwendig. Dabei werden weder euer Passwort noch eure Email Adresse an platinenmacher.tech übertragen.
                </p><p style={{ textAlign: 'center' }}>
                    <Button href="https://www.twitch.tv/platinenmacher" style={{marginRight:"var(--bs-gutter-x)"}}>Platinenmacher »</Button>
                
                    <Button href="https://www.twitch.tv/thebrutzler">TheBrutzler »</Button>
                </p>
                <h2>India Navi</h2>
                <p>
                    Der Brutzler hat dem India Navi einen neuen ESP32 verpasst. Der kommt jetzt mit 8MB RAM. 8 MegaByte! Da können wir jede Menge Sachen dazuerfinden.
                    Ab und zu gibt es Updates. Dazu könnt ihr gerne das <a href="https://github.com/DasBasti/IndiaNavi_Firmware">GitHub</a> Projekt folgen.
                </p>
            </Col>
            <Col md={4}>
                <h2>Links</h2>
                <hr />
                <ListGroup>
                    <ListGroup.Item style={{border:0}}><a className="linkListLinks" href="https://www.twitch.tv/platinenmacher"><FontAwesomeIcon icon={faTwitch as IconProp} /> Twitch</a></ListGroup.Item>
                    <ListGroup.Item style={{border:0}}><a className="linkListLinks" href="https://kurzschluss-blog.de/"><FontAwesomeIcon icon={faWordpress as IconProp} /> Blog</a></ListGroup.Item>
                    <ListGroup.Item style={{border:0}}><a className="linkListLinks" href="http://kurzschlussjunkies.de/"><FontAwesomeIcon icon={faPodcast as IconProp} /> Podcast</a></ListGroup.Item>
                    <ListGroup.Item style={{border:0}}><a className="linkListLinks" href="https://github.com/DasBasti"><FontAwesomeIcon icon={faGithub as IconProp} /> GitHub</a></ListGroup.Item>
                    <ListGroup.Item style={{border:0}}><a className="linkListLinks" href="https://www.youtube.com/channel/UCPyRzwxnI9-pL5-50JkxY5Q"><FontAwesomeIcon icon={faYoutube as IconProp} /> Youtube</a></ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row><Col><h2>Neusten Projekt Posts</h2></Col></Row>
    </Container>
    <ProjectFeed num={3}/>
    </>
    );
}
