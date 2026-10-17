import { CSSProperties } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import "./IndiaNavi.css";

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

// Pure color as used by the firmware, and how it looks on the panel (values from wandernavi.app)
const colors: [number, string, string, string][] = [
    [0, "Schwarz", "#000000", "#393039"],
    [1, "Weiß", "#ffffff", "#ffffff"],
    [2, "Grün", "#00ff00", "#3a5b46"],
    [3, "Blau", "#0000ff", "#3d3b5e"],
    [4, "Rot", "#ff0000", "#9c484b"],
    [5, "Gelb", "#ffff32", "#d0be47"],
    [6, "Orange", "#ff7f00", "#b16a49"],
];

const appFeatures = [
    "Track-Bibliothek: GPX-Dateien aus beliebigen Apps öffnen und den passenden senden",
    "Karte mit Suche nach Orten und Koordinaten",
    "Farbfilter mit Live-Vorschau, wie Kartenfarben zu Display-Farben werden",
    "Übertragung über das WLAN des Geräts oder dein Heimnetz",
    "Bluetooth: Kopplung, Zeit und Position, Display-Einstellungen, Firmware-Updates",
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

const repos = [
    {
        title: "IndiaNavi_Firmware",
        badge: ["MIT", "wn-green"],
        text: "Firmware für den ESP32-S3: Display, GNSS, Karte, Bluetooth, WLAN-Upload-API. Rendert den Kartenbildschirm auch am PC.",
        url: "https://github.com/DasBasti/IndiaNavi_Firmware",
        label: "github.com/DasBasti/IndiaNavi_Firmware",
    },
    {
        title: "IndiaNavi_App",
        badge: ["Android", "wn-orange"],
        text: "Die WanderNavi-Begleit-App für Android, gebaut mit React Native und Expo.",
        url: "https://github.com/DasBasti/IndiaNavi_App",
        label: "github.com/DasBasti/IndiaNavi_App",
    },
    {
        title: "IndiaNavi_Converter",
        badge: ["Karten", "wn-yellow"],
        text: "Konverter, der Kartenkacheln für das Gerät erzeugt.",
        url: "https://github.com/DasBasti/IndiaNavi_Converter/tree/rust/rust",
        label: "github.com/DasBasti/IndiaNavi_Converter",
    },
];

export default function IndiaNavi() {
    return (
        <Container className="wandernavi">
            <section className="wn-hero">
                <Row className="align-items-center g-4">
                    <Col lg={7}>
                        <span className="wn-kicker">Open-Source-Wandernavi</span>
                        <h2 className="wn-title">WanderNavi</h2>
                        <p className="wn-subtitle">früher IndiaNavi</p>
                        <p className="wn-lead">
                            Ein kleiner Offline-Navigator mit 7-farbigem ePaper-Display. Er gibt keine
                            Abbiegehinweise, sondern zeigt, wo du bist, auf einer echten Karte neben dem
                            Track, den du laufen willst. Ohne Netz, ohne Abo, ohne Cloud: Die Karten liegen
                            auf der SD-Karte und das Display bleibt auch in der prallen Sonne lesbar.
                        </p>
                    </Col>
                    <Col lg={5}>
                        <img
                            src={process.env.PUBLIC_URL + "/img/navi_background.png"}
                            alt="Illustration: zwei Wanderer vor einer Berglandschaft"
                            className="wn-hero-image"
                        />
                    </Col>
                </Row>
            </section>

            <section className="wn-cta">
                <div>
                    <h3>Mehr erfahren auf wandernavi.app</h3>
                    <p>Alle Infos zu Gerät, Funktionsweise, Android-App und Quellcode findest du auf der Projektseite.</p>
                </div>
                <Button
                    variant=""
                    size="lg"
                    className="wn-button wn-green"
                    href={WANDERNAVI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Zu wandernavi.app
                </Button>
            </section>

            <section className="wn-section">
                <h2 className="wn-section-title">Das Gerät</h2>
                <p className="wn-section-lead">
                    Gebaut zum Wandern und Nicht-Verlaufen. Das Display aktualisiert sich einmal pro Minute
                    und behält sein Bild ohne Strom. Der Akku wird so fürs Satellitensuchen verwendet und
                    nicht fürs Leuchten von Pixeln.
                </p>
                <Row className="wn-features g-3">
                    {features.map((f) => (
                        <Col sm={6} lg={3} key={f.title}>
                            <Card>
                                <Card.Body>
                                    <Card.Title as="h3">{f.title}</Card.Title>
                                    <Card.Text>{f.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="wn-section wn-tinted">
                <Row className="g-4 align-items-center">
                    <Col lg={7}>
                        <h2 className="wn-section-title">Sieben Farben, kein Licht</h2>
                        <p>
                            Das Display ist ein Waveshare-ACeP-5,65"-ePaper mit 600 × 448 Pixeln und ohne
                            Hintergrundbeleuchtung. Jedes Pixel hat eine von sieben Farben. Die App wandelt
                            OpenStreetMap-Kacheln genau in diese Farben um und mischt dort, wo die Karte einen
                            Zwischenton braucht, zwei davon im Dither-Muster.
                        </p>
                        <p className="mb-0">
                            Die reinen Farben sind die, mit denen die Firmware arbeitet. Auf dem Panel wirken
                            sie ruhiger und dunkler, wie Papier im Tageslicht.
                        </p>
                    </Col>
                    <Col lg={5}>
                        <ul className="wn-palette">
                            {colors.map(([index, name, pure, panel]) => (
                                <li key={index}>
                                    <span
                                        className="wn-swatch"
                                        style={{ "--pure": pure, "--panel": panel } as CSSProperties}
                                    />
                                    <b>{index}</b> {name}
                                </li>
                            ))}
                        </ul>
                        <p className="wn-note mt-2 mb-0">Links die reine Farbe, rechts wie das Panel sie zeigt.</p>
                    </Col>
                </Row>
            </section>

            <section className="wn-section">
                <h2 className="wn-section-title">So funktioniert es</h2>
                <Row as="ol" className="wn-steps g-4">
                    {steps.map(([title, text], i) => (
                        <Col as="li" sm={6} lg={3} key={title}>
                            <span className="wn-step-number" aria-hidden="true">{i + 1}</span>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="wn-section">
                <h2 className="wn-section-title">Die App</h2>
                <p className="wn-section-lead">
                    Die WanderNavi-App für Android übernimmt, was das kleine Gerät nicht kann: Orte finden,
                    Kartenkacheln laden und in ePaper-Farben umrechnen. Sie sieht auch aus wie das Gerät:
                    sieben Farben, schwarze Konturen, eckige Kanten.
                </p>
                <ul className="wn-checklist">
                    {appFeatures.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
                <Button
                    variant=""
                    className="wn-button wn-orange"
                    href="https://github.com/DasBasti/IndiaNavi_App/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    App für Android herunterladen
                </Button>
                <p className="wn-note mt-3 mb-0">
                    Die App gibt es derzeit nur für Android. Preise nennt die Projektseite nicht; das Gerät
                    braucht weder Abo noch Cloud.
                </p>
            </section>

            <section className="wn-section">
                <h2 className="wn-section-title">Technische Daten</h2>
                <Table responsive className="wn-specs">
                    <tbody>
                        {hardware.map(([k, v]) => (
                            <tr key={k}>
                                <th scope="row">{k}</th>
                                <td>{v}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>

            <section className="wn-section">
                <h2 className="wn-section-title">Open Source</h2>
                <p className="wn-section-lead">Alles liegt auf GitHub: nachbauen, forken, Pull Requests schicken.</p>
                <Row className="g-4">
                    {repos.map((r) => (
                        <Col md={4} key={r.title}>
                            <Card className="wn-repo">
                                <Card.Body>
                                    <span className={"wn-badge " + r.badge[1]}>{r.badge[0]}</span>
                                    <Card.Title as="h3">{r.title}</Card.Title>
                                    <Card.Text>{r.text}</Card.Text>
                                    <a href={r.url}>{r.label}</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="wn-section wn-tinted">
                <h2 className="wn-section-title">Von IndiaNavi zu WanderNavi</h2>
                <p className="mb-0">
                    Das Projekt startete als IndiaNavi, ein Navi für Abenteurer mit Hut und Rucksack. Das
                    Produkt heißt inzwischen WanderNavi, der alte Name taucht aber noch auf: Das Gerät
                    meldet sich per WLAN und Bluetooth als <code>IndiaNavi-XXXX</code> und auch die
                    Repositories tragen ihn.
                </p>
            </section>

            <div className="wn-dither" aria-hidden="true" />

            <div className="text-center mb-4">
                <Button
                    variant=""
                    size="lg"
                    className="wn-button wn-green"
                    href={WANDERNAVI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    wandernavi.app besuchen →
                </Button>
            </div>

            <p className="wn-footer text-center mb-0">
                Entwicklungs-Log: <a href="https://hackaday.io/project/179890/logs">hackaday.io/project/179890</a>
                {" · "}Kartendaten © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende
            </p>
        </Container>
    )
}
