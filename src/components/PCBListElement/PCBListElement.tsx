import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faFilm, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular, faCommentDots, faEdit } from '@fortawesome/free-regular-svg-icons'

import ChatContext from "../../context/chat";
import UserContext from "../../context/user";

import UpDownVote from '../UpDownVote'
import PCBImage from '../PCBImage'

import { getToken, getUid, isLoggedIn } from '../../helper/login';

export type PCBListElementProps = {
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
}

export default function PCBListElement(props: PCBListElementProps) {

    const { upvotes, voted, username, str, name, counter, last_seen, fav, hidden, animation } = props;
    const loggedin = isLoggedIn();
    const [favourite, setFavourite] = useState(fav);
    const chat = useContext(ChatContext);
    const user = useContext(UserContext);

    if (!str || hidden) {
        return (<div></div>);
    }

    const sendChat = (str: String, name?: String) => {
        if (chat) {
            let code = str;
            if (name)
                code = name;
            chat.say("Platinenmacher", "!pcb " + code);
        }
    }

    const sendFav = (str: string) => {
        var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "/pcb/api/fav/" + str); // false for synchronous request
            xmlHttp.setRequestHeader("Bearer", getToken());
            xmlHttp.setRequestHeader("User", getUid());
            xmlHttp.onload = () => {
                if (xmlHttp.responseText === "like") {
                    setFavourite(true)
                } else if (xmlHttp.responseText === "dislike") {
                    setFavourite(false)
                } else {
                    alert(xmlHttp.responseText)
                }
            };
            xmlHttp.send(null);
    }

    return (
        <Row>
            <Col md={1} />
            <Col md={1}><UpDownVote upvotes={upvotes} voted={voted} /></Col>
            <Col md={2}>{username}</Col>
            <Col md={4}>
                <Row><Col><PCBImage code={str} onClick={() => { if (loggedin) sendChat(str, name); }} /></Col></Row>
                <Row><Col>{name}</Col></Row></Col>
            <Col md={1}>
                <Row><Col>
                    {username === user?.username &&
                        <FontAwesomeIcon icon={faEdit} />}
                </Col></Row>
                <Row><Col>
                    {loggedin &&
                        <div onClick={() => { sendChat(str) }}><FontAwesomeIcon icon={faCommentDots} /></div>}
                </Col></Row>
                <Row><Col>
                    {animation && <FontAwesomeIcon icon={faFilm} />}
                </Col></Row>
                <Row><Col>
                    <div onClick={() => { sendFav(str) }}>
                        <FontAwesomeIcon icon={(favourite ? faHeartSolid : faHeartRegular)} />
                    </div>
                </Col></Row>
                <Row><Col>
                    {loggedin && username === user?.username && <FontAwesomeIcon icon={faTrash} />}
                </Col></Row>
            </Col>
            <Col md={2}>Views: {counter}
                <p><small>zuletzt gesehen:
                    {last_seen}</small></p>
            </Col>
        </Row>
    )
}