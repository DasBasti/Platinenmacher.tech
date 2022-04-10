import { Container } from "react-bootstrap";
import ProjectFeed from "../components/ProjectFeed";

export default function Projects() {
    return (
        <Container>
            <ProjectFeed num={100}/>
        </Container>
        )
    }