import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faYoutube, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

import { Col, Container, ListGroup, Row } from "react-bootstrap";

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
                    Ich bin wieder aktiv am Streamen! 👋
                </p>
                <p>
                    Nach einer intensiven Zeit mit Fernstudium und Masterarbeit bin ich endlich wieder zurück auf Twitch. 
                    Es gab viel zu tun, aber jetzt ist wieder Zeit für das, was mir am meisten Spaß macht:
                    AI, Software, Löten, Firmwares und vieles mehr.
                </p>
                <p style={{ textAlign: 'center' }}>
                    <a href="https://www.twitch.tv/platinenmacher" className="btn btn-primary" style={{marginRight:"var(--bs-gutter-x)"}}>
                        📺 Jetzt auf Twitch ansehen
                    </a>
                </p>
                <p>
                    Ich freue mich auf eure Chat-Nachrichten und gemeinsame Projekte. Montags und Mittwochs gegen 19:30 Uhr
                    Bleibt gespannt auf neue Projekte und Updates!
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
