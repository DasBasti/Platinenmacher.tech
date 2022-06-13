import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type UpDownVoteProps = {
    upvotes: number,
    voted: string,
    pcb_str: string,
    callbackfn?: Function,
}

export default function UpDownVote(props: UpDownVoteProps) {
    const { upvotes, voted, callbackfn, pcb_str } = props;
    let offset_up = 1;
    let offset_down = 1;
    if (voted === "True")
        offset_up = 2;
    else if (voted === "False")
        offset_down = 0;
    const colors = ["red", "black", "green"]
    const cb = callbackfn ? callbackfn : () => { }
    return (
        <div>
            <Row><Col onClick={() => cb("up", pcb_str)}>
                <FontAwesomeIcon icon={faArrowUp as IconProp}
                    color={colors[offset_up]} /></Col></Row>

            <Row><Col>{upvotes}</Col></Row>

            <Row><Col onClick={() => cb("down", pcb_str)}>
                <FontAwesomeIcon icon={faArrowDown as IconProp}
                    color={colors[offset_down]} />
            </Col></Row>
        </div>
    );
}