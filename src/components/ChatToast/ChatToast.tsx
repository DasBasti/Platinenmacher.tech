import { useRef } from "react";
import { Toast } from "react-bootstrap";
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ChatToastProps = {
    id?: number;
    username: String;
    message: String;
    datetime: String;
    onTimeout: Function;
}

export default function ChatToast(props: ChatToastProps) {
    const self = useRef<HTMLDivElement>(null);

    return <Toast onClose={()=>props.onTimeout(self.current, props.id)} delay={10000} autohide ref={self}>
        <Toast.Header closeButton={true}>
            <FontAwesomeIcon icon={faTwitch as IconProp} />
            <strong className="me-auto">{props.username}</strong>
            {false && <small>{props.datetime}</small>}
        </Toast.Header>
        <Toast.Body>
            {props.message}
        </Toast.Body>
    </Toast>;
}