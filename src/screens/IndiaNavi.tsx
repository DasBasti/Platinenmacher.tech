import { Button, Card, Col, Container, ListGroup, Row, Table } from "react-bootstrap";

const WANDERNAVI_URL = "https://wandernavi.app/";

const features = [
    {
        title: "GPS, GLONASS, Galileo",
        text: "Quectel-L96-Empfänger. Das Smartphone kann Zeit und Position für einen schnelleren ersten Fix übergeben.",
    },
    {
        title: "Dein Track auf der Karte",
        text: "GPX-Track mit Richtungspfeilen, Wegpunkten und Höhenprofil über vorgerenderten Kartenkacheln.",
    },
    {
        title: "Ein Knopf",
        text: "Kurz drücken wechselt zwischen 100 m und 500 m Maßstab, lang drücken schaltet ein oder aus.",
    },
    {
        title: "Komplett offline",
        text: "Karten und Track liegen auf der SD-Karte. Jede Wanderung wird in log.gpx protokolliert, pro Start ein neues Segment.",
    },
    {
        title: "Bluetooth LE",
        text: "Wird per 6-stelligem Passkey vom Display mit einem Smartphone gekoppelt. Für Zeit, Position, Einstellungen und Firmware-Updates.",
    },
    {
        title: "Eigenes WLAN",
        text: "Wird das Ladegerät angesteckt, öffnet das Gerät einen Access Point und zeigt einen QR-Code. Scannen und Karten hochladen.",
    },
    {
        title: "Sparsam mit dem Akku",
        text: "Deep Sleep mit Wecken per Knopf, Ladeerkennung und ein „Akku leer“-Bildschirm, bevor es ausgeht.",
    },
    {
        title: "Sichere Updates",
        text: "Neue Firmware kommt aus der App per WLAN oder Bluetooth. Stürzt sie in der ersten Minute ab, wird automatisch zurückgerollt.",
    },
];

const steps = [
    ["Track wählen", "GPX-Datei in der WanderNavi-App öffnen oder teilen. Die App verwaltet eine Track-Bibliothek."],
    ["Karte vorbereiten", "Die App lädt die Kartenkacheln rund um den Track für beide Zoomstufen und wandelt sie in die sieben Display-Farben um."],
    ["Übertragen", "WLAN-QR-Code auf dem Display scannen. Die App kopiert Track und Kacheln auf die SD-Karte, mit Fortschrittsbalken auf beiden Bildschirmen."],
    ["Losgehen", "Einschalten und das Handy wegstecken. Das Navi findet seine Position und aktualisiert die Karte jede Minute."],
];

const colors: [number, string, string, string][] = [
    [0, "Schwarz", "#000000", "light"],
    [1, "Weiß", "#ffffff", "dark"],
    [2, "Grün", "#2e8b3d", "light"],
    [3, "Blau", "#2a4ba8", "light"],
    [4, "Rot", "#c8281e", "light"],
    [5, "Gelb", "#f0d318", "dark"],
    [6, "Orange", "#e87a1c", "dark"],
];

const hardware = [
    ["Controller", "ESP32-S3, 16 MB Flash, 8 MB PSRAM"],
    ["Display", "Waveshare ACeP 5,65\", 7 Farben, 600 × 448 Pixel, SPI"],
    ["Positionierung", "Quectel L96 (GPS, GLONASS, Galileo)"],
    ["Speicher", "microSD, FAT32 oder exFAT, 4-Bit-SDMMC"],
    ["Funk", "Bluetooth LE (NimBLE), WLAN als Access Point und Client, mDNS indianavi.local"],
    ["Karte", "Kacheln mit 256 × 256 Pixeln, 4 Bit pro Pixel, Zoomstufen 14 und 16"],
    ["Firmware", "C auf ESP-IDF via PlatformIO, OTA-Updates mit automatischem Rollback"],
];

export default function IndiaNavi() {
    return (
        <Container>
            <h2>WanderNavi (IndiaNavi)</h2>
            <p>
                <img
                    src={process.env.PUBLIC_URL + "/img/navi_background.png"}
                    alt="WanderNavi ePaper-Wandernavigationsgerät"
                    className="img-fluid"
                />
            </p>
            <p className="lead">
                WanderNavi ist ein kleiner, quelloffener Offline-Wandernavigator mit einem
                7-farbigen ePaper-Display. Er gibt keine Abbiegehinweise, sondern zeigt, wo du
                bist, auf einer echten Karte neben dem Track, den du laufen willst. Ohne Netz,
                ohne Abo, ohne Cloud: Die Karten liegen auf der SD-Karte und das Display bleibt
                auch in der prallen Sonne lesbar.
            </p>

            <Card className="my-4 text-center border-primary">
                <Card.Body>
                    <Card.Title as="h3">Mehr erfahren auf wandernavi.app</Card.Title>
                    <Card.Text>
                        Alle Infos zu Gerät, Funktionsweise, Android-App und Quellcode findest du
                        auf der Projektseite.
                    </Card.Text>
                    <Button
                        variant="primary"
                        size="lg"
                        href={WANDERNAVI_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Zu wandernavi.app
                    </Button>
                </Card.Body>
            </Card>

            <h3>Das Gerät</h3>
            <p>
                Gebaut zum Wandern und Nicht-Verlaufen. Das Display aktualisiert sich einmal pro
                Minute und behält sein Bild ohne Strom. Der Akku wird so fürs Satellitensuchen
                verwendet und nicht fürs Leuchten von Pixeln.
            </p>
            <Row>
                {features.map((f) => (
                    <Col md={6} lg={3} className="mb-3" key={f.title}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title as="h5">{f.title}</Card.Title>
                                <Card.Text>{f.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h3>Sieben Farben, keine Hintergrundbeleuchtung</h3>
            <p>
                Das Display ist ein Waveshare-ACeP-5,65"-ePaper mit 600 × 448 Pixeln. Jedes Pixel
                hat eine von sieben Farben. Die App wandelt OpenStreetMap-Kacheln genau in diese
                Farben um und mischt dort, wo die Karte einen Zwischenton braucht, zwei davon im
                Dither-Muster. Auf dem Panel wirken die Farben ruhiger und dunkler, wie Papier im
                Tageslicht.
            </p>
            <p>
                {colors.map(([index, name, hex, text]) => (
                    <span
                        key={index}
                        className={"badge me-2 mb-2 border text-" + text}
                        style={{ backgroundColor: hex }}
                    >
                        {index} {name}
                    </span>
                ))}
            </p>

            <h3>So funktioniert es</h3>
            <ListGroup as="ol" numbered className="mb-4">
                {steps.map(([title, text]) => (
                    <ListGroup.Item as="li" key={title}>
                        <b>{title}</b>: {text}
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <h3>Die App</h3>
            <p>
                Die WanderNavi-App für Android übernimmt, was das kleine Gerät nicht kann: Orte
                finden, Kartenkacheln laden und in ePaper-Farben umrechnen. Sie ist mit React
                Native und Expo gebaut.
            </p>
            <ul>
                <li>Track-Bibliothek: GPX-Dateien aus beliebigen Apps öffnen und den passenden senden</li>
                <li>Karte mit Suche nach Orten und Koordinaten</li>
                <li>Farbfilter mit Live-Vorschau, wie Kartenfarben zu Display-Farben werden</li>
                <li>Übertragung über das WLAN des Geräts oder dein Heimnetz</li>
                <li>Bluetooth: Kopplung, Zeit und Position, Display-Einstellungen, Firmware-Updates</li>
            </ul>
            <p>
                <Button
                    variant="success"
                    href="https://github.com/DasBasti/IndiaNavi_App/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    App für Android herunterladen
                </Button>{" "}
                <small className="text-muted">
                    Die App gibt es derzeit nur für Android. Preise nennt die Projektseite nicht;
                    laut ihr braucht das Gerät weder Abo noch Cloud.
                </small>
            </p>

            <h3>Technische Daten</h3>
            <Table bordered responsive className="mb-4">
                <tbody>
                    {hardware.map(([k, v]) => (
                        <tr key={k}>
                            <th scope="row">{k}</th>
                            <td>{v}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h3>Open Source</h3>
            <p>Alles liegt auf GitHub: nachbauen, forken, Pull Requests schicken.</p>
            <Row>
                <Col md={4} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>Firmware</Card.Title>
                            <Card.Text>
                                Firmware für den ESP32-S3: Display, GNSS, Karte, Bluetooth, WLAN-Upload-API.
                                Rendert den Kartenbildschirm auch am PC. Lizenz: MIT.
                            </Card.Text>
                            <a href="https://github.com/DasBasti/IndiaNavi_Firmware">
                                github.com/DasBasti/IndiaNavi_Firmware
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>App</Card.Title>
                            <Card.Text>Die WanderNavi-Begleit-App für Android (React Native, Expo).</Card.Text>
                            <a href="https://github.com/DasBasti/IndiaNavi_App">
                                github.com/DasBasti/IndiaNavi_App
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
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

            <h3>Von IndiaNavi zu WanderNavi</h3>
            <p>
                Das Projekt startete als IndiaNavi, ein Navi für Abenteurer mit Hut und Rucksack.
                Das Produkt heißt inzwischen WanderNavi, der alte Name taucht aber noch auf: Das
                Gerät meldet sich per WLAN und Bluetooth als <code>IndiaNavi-XXXX</code> und auch
                die Repositories tragen ihn.
            </p>

            <p className="mt-3">
                Entwicklungs-Log: <a href="https://hackaday.io/project/179890/logs">hackaday.io/project/179890</a>
            </p>
            <p className="text-muted">Kartendaten © OpenStreetMap-Mitwirkende.</p>

            <p className="text-center my-4">
                <Button variant="outline-primary" href={WANDERNAVI_URL} target="_blank" rel="noopener noreferrer">
                    wandernavi.app besuchen →
                </Button>
            </p>
        </Container>
    )
}
