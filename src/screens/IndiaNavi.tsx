import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function IndiaNavi() {
    return (
        <Container>
            <h2>Wandernavi - IndiaNavi</h2>
            <p>
                <img
                    src={process.env.PUBLIC_URL + "/img/navi_background.png"}
                    alt="IndiaNavi ePaper Wandernavigationsgerät"
                    className="img-fluid"
                />
            </p>
            <p className="lead">
                Das IndiaNavi ist ein digitales, ePaper basiertes, tageslichttaugliches
                Navigationsgerät für Wanderungen. Es läuft auf einem ESP32, zeigt die Karte auf
                einem stromsparenden ePaper-Display an und liest vorberechnete Kartenkacheln von
                einer SD-Karte.
            </p>

            <Card className="my-4 text-center border-primary">
                <Card.Body>
                    <Card.Title as="h3">Mehr erfahren auf wandernavi.app</Card.Title>
                    <Card.Text>
                        Alle Infos zum Wandernavi, zu Karten und zur Nutzung findest du auf der
                        Projektseite.
                    </Card.Text>
                    <Button
                        variant="primary"
                        size="lg"
                        href="https://wandernavi.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zu wandernavi.app
                    </Button>
                </Card.Body>
            </Card>

            <h3>So funktioniert es</h3>
            <ol>
                <li>Wanderung in einer Planungs-App wie Komoot oder gpx.studio planen.</li>
                <li>Den GPX-Track in den Kartenkonverter laden.</li>
                <li>Kartenausschnitt auf Basis von OpenStreetMap erzeugen und auf die SD-Karte kopieren.</li>
                <li>SD-Karte ins Gerät stecken und losgehen – lesbar auch bei direkter Sonne.</li>
            </ol>

            <h3>Open Source</h3>
            <Row>
                <Col md={6} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Firmware</Card.Title>
                            <Card.Text>Software für das Gerät (ESP32).</Card.Text>
                            <a href="https://github.com/DasBasti/IndiaNavi_Firmware">
                                github.com/DasBasti/IndiaNavi_Firmware
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Karten erstellen</Card.Title>
                            <Card.Text>Konverter, der Kartenkacheln für das Gerät erzeugt.</Card.Text>
                            <a href="https://github.com/DasBasti/IndiaNavi_Converter/tree/rust/rust">
                                github.com/DasBasti/IndiaNavi_Converter
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <p className="mt-3">
                Entwicklungs-Log: <a href="https://hackaday.io/project/179890/logs">hackaday.io/project/179890</a>
            </p>

            <p className="text-center my-4">
                <Button variant="outline-primary" href="https://wandernavi.app/" target="_blank" rel="noopener noreferrer">
                    wandernavi.app besuchen →
                </Button>
            </p>
        </Container>
    )
}
