import Async, { PromiseFn } from "react-async";
import { Row, Col, Container, Card, Button, Spinner } from "react-bootstrap";


export type ProjectFeedProps = {
    num: number;
}

export default function ProjectFeed(props: ProjectFeedProps) {

    const loadProjects: PromiseFn<any> = async () => /* URL mit Projekteinträgen aus dem Forum */
        await fetch("https://kurzschluss-junkies.de/c/projekte/platinenmacher-stream/21.json",
        ).then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())

    return (<Async promiseFn={loadProjects}>
        <Async.Pending><Spinner animation="border" style={{ alignContent: "center" }} /> Loading...</Async.Pending>
        <Async.Fulfilled>
            {(data: any) => {
                const projects = data.topic_list?.topics?.slice(1, props.num + 1);
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
        <Async.Rejected>
            Error
        </Async.Rejected>
    </Async>);
} 