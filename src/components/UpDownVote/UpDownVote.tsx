import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

type UpDownVoteProps = {
    upvotes: number,
    voted: number,
}

export default function UpDownVote(props: UpDownVoteProps) {
    const {upvotes, voted} = props;
    const colors = ["red","black","green"]
    return (
    <div>
        <Row><Col>
        <FontAwesomeIcon icon={faArrowUp}
        color={colors[voted+1]}/></Col></Row>

        <Row><Col>{upvotes}</Col></Row>
        
        <Row><Col><FontAwesomeIcon icon={faArrowDown} color={colors[voted+1]}/>
        </Col></Row>
        </div>
    );
}