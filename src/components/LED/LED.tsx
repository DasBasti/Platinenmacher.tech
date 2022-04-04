import "../../index.css"

export type LEDProps = {
    color: number;
    id: number;
    owner: string;
    animation: boolean;
    last_seen: string;
    highlight?: boolean;
}

export default function LED(props: LEDProps) {

    let led_color = "#000000";
    if (props.owner && props.color) {
        led_color = "#" + props.color.toString(16).padStart(6, "0").slice(0, 6)
    }
    const now = new Date().getTime();
    const last_seen = new Date(props.last_seen).getTime();
    const time_diff = (now - last_seen) / 1000;
    const seen = time_diff < 60 * 60 * 8;

    return <div
        className={props.highlight ? "alerts-border led":"led"}
        style={{ backgroundColor: seen ? led_color : "#000000", border: props.highlight ? "3px solid red" : "none" }}
        title={`LED ${props.id}: ${props.owner}\nzuletzt gesehen: ${props.last_seen}`}>
    </div>;
}

