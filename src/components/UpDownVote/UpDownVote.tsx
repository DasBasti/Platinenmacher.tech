import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
        <FontAwesomeIcon icon={faArrowUp as IconProp}
        color={colors[voted+1]}/></Col></Row>

        <Row><Col>{upvotes}</Col></Row>
        
        <Row><Col><FontAwesomeIcon icon={faArrowDown as IconProp} color={colors[voted+1]}/>
        </Col></Row>
        </div>
    );
}