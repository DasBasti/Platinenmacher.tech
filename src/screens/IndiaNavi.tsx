import { Container } from "react-bootstrap";

export default function IndiaNavi() {
    return (
        <Container>
            <h2>Wandernavi - IndiaNavi</h2>
            <p>
                <img src={process.env.PUBLIC_URL + "/img/navi_background.png"} alt="" /> <br/>
                Das Indianavi ist ein digitales, ePaper basiertes, tageslicht lesbares Navigationsgerät.
            </p><p>
                <b>Software</b>: <a href="https://github.com/DasBasti/IndiaNavi_Firmware">https://github.com/DasBasti/IndiaNavi_Firmware</a>
            </p><p>
                <b>Karten erstellen</b>: <a href="https://github.com/DasBasti/IndiaNavi_Converter/tree/rust/rust">https://github.com/DasBasti/IndiaNavi_Converter/tree/rust/rust</a>
            </p>
        </Container>
    )
}