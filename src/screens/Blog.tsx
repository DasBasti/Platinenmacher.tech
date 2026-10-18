import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch, faYoutube, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

import { Col, Container, Row } from "react-bootstrap";

import ProjectFeed from "../components/ProjectFeed";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const TWITCH_URL = "https://www.twitch.tv/platinenmacher";

const topics = ["Embedded", "Firmware", "PCB Design", "Löten", "Software", "AI"];

const links = [
    { href: TWITCH_URL, icon: faTwitch, label: "Twitch" },
    { href: "https://kurzschluss-blog.de/", icon: faWordpress, label: "Blog" },
    { href: "http://kurzschlussjunkies.de/", icon: faPodcast, label: "Podcast" },
    { href: "https://github.com/DasBasti", icon: faGithub, label: "GitHub" },
    { href: "https://www.youtube.com/channel/UCPyRzwxnI9-pL5-50JkxY5Q", icon: faYoutube, label: "Youtube" },
];

export default function Blog() {
    // Twitch only allows the player on pages listed as parent
    const playerSrc = "https://player.twitch.tv/?channel=platinenmacher&muted=true&autoplay=false&parent=" + window.location.hostname;

    return (<>
    <Container>
        <section className="stream-hero">
            <Row className="align-items-center g-4">
                <Col lg={5}>
                    <div className="stream-prompt">$ ./platinenmacher --live</div>
                    <h1>Elektronik &amp; Firmware <span>live auf Twitch</span></h1>
                    <p className="stream-lead">
                        Platinen entwerfen, Bauteile löten, Firmware flashen und debuggen.
                        Gemeinsam mit dem Chat vom Schaltplan bis zum laufenden Code.
                    </p>
                    <ul className="stream-tags">
                        {topics.map((topic) => <li key={topic}>{topic}</li>)}
                    </ul>
                    <p className="stream-schedule">
                        <strong>Mittwochs</strong> gegen 19:00 Uhr
                    </p>
                    <div className="stream-actions">
                        <a href={TWITCH_URL} className="btn btn-primary">
                            <FontAwesomeIcon icon={faTwitch as IconProp} /> Jetzt auf Twitch ansehen
                        </a>
                        <a href="/projekte" className="btn btn-outline-light">Projekte</a>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="mb-2"><span className="live-badge">Stream</span></div>
                    <div className="stream-player">
                        <iframe
                            src={playerSrc}
                            title="Platinenmacher Twitch Stream"
                            allowFullScreen
                        />
                    </div>
                </Col>
            </Row>
        </section>
        <Row>
            <Col md={8}>
                <div className="panel-box">
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
                    <p className="mb-0">
                        Ich freue mich auf eure Chat-Nachrichten und gemeinsame Projekte. Mittwochs gegen 19:00 Uhr
                        Bleibt gespannt auf neue Projekte und Updates!
                    </p>
                </div>
            </Col>
            <Col md={4}>
                <div className="panel-box">
                    <h2>Links</h2>
                    <hr />
                    {links.map((link) => (
                        <a key={link.label} className="linkListLinks" href={link.href}>
                            <FontAwesomeIcon icon={link.icon as IconProp} /> {link.label}
                        </a>
                    ))}
                </div>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row><Col><h2>Neueste Projekt-Posts</h2></Col></Row>
    </Container>
    <ProjectFeed num={3}/>
    </>
    );
}
