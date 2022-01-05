import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faFilm, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons'

import UpDownVote from '../UpDownVote'
import PCBImage from '../PCBImage'

type PCBListElementProps = {
    upvotes: number,
    voted: number,
    username: string,
    str: string,
    name: string,
    counter: number,
    last_seen: string,
    fav?: boolean,
    hidden: boolean,
    animation: boolean,
    loggedin:boolean,
}

export default function PCBListElement(props: PCBListElementProps) {
    const { upvotes, voted, username, str, name, counter, last_seen, fav, hidden, loggedin, animation } = props;
    if(!str || hidden){
        return(<div></div>);
    }
    return (
        <Row>
            <Col md={1} />
            <Col md={1}><UpDownVote upvotes={upvotes} voted={voted}/></Col>
            <Col md={2}>{username}</Col>
            <Col md={4}>
                <Row><Col><PCBImage code={str} /></Col></Row>
                <Row><Col>{name}</Col></Row></Col>
            <Col md={1}>
            <Row><Col>
                {username === "Username" &&
                    <FontAwesomeIcon icon={faEdit} /> }
                </Col></Row>
                <Row><Col>
                {loggedin &&
                    <FontAwesomeIcon icon={faCommentDots} />}
                </Col></Row>
                <Row><Col>
                {animation &&    <FontAwesomeIcon icon={faFilm} />}
                </Col></Row>
                <Row><Col>
                    <FontAwesomeIcon icon={(fav ? faHeartSolid : faHeartRegular)} />
                </Col></Row>
                <Row><Col>
                {loggedin &&<FontAwesomeIcon icon={faTrash} />}
                </Col></Row>
            </Col>
            <Col md={2}>Views: {counter}
                <p><small>zuletzt gesehen:
                    {last_seen}</small></p>
            </Col>
        </Row>
    )
}