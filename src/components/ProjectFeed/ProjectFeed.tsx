import { Async, useAsync } from "react-async";
import { Row, Col, Container, Image, Card, Button, Spinner } from "react-bootstrap";


type ProjectFeedProps = {

}

const loadProjects = async () => /* URL mit Projekteinträgen aus dem Forum */
    await fetch("https://kurzschluss-junkies.de/c/projekte/platinenmacher-stream/21.json",
    ).then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function ProjectFeed(props: ProjectFeedProps) {


    return <Async promiseFn={loadProjects}>
        <Async.Pending><Spinner animation="border" /> Loading...</Async.Pending>
        <Async.Fulfilled>
            {(data: any) => {
                const projects = data.topic_list?.topics?.slice(1);
                return <Container>
                    <Row>
                        {projects.map((topic: any, key: number) =>
                            <Card as={Col} key={key} lg={3} style={{ margin: ".5em" }}>
                                <a href={`https://kurzschluss-junkies.de/t/${topic.id}`}>
                                    <Card.Img variant="top" src={topic.image_url} className={"projectImage"} width={"100%"} height={"350"} />
                                </a>
                                <Card.Body>
                                    <Card.Title>{topic.title}</Card.Title>
                                    <Button variant="primary" href={`https://kurzschluss-junkies.de/t/${topic.id}`}>Mehr...</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>
            }}
        </Async.Fulfilled>
        <Async.Rejected>{error => console.log(error)}</Async.Rejected>
    </Async>
} 