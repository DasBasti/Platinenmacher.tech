import "../../index.css"

export type LEDProps = { 
    color: number; 
    id: number;
    owner: string; 
    animation: boolean;
    last_seen: string;
}

export default function LED(props: LEDProps) {

    let led_color = props.color ? "#"+props.color.toString(16).padStart(6,"0").slice(0,6): "#000000";
    const seen = new Date(props.last_seen).getTime();
    const now = new Date().getTime();
    return <div className="led" style={{backgroundColor: led_color}} title={`LED ${props.id}: ${props.owner}`}>
        
    </div>;
}

//1631721979000 1645650542798 13928563798


// 2021-09-13 17:11:07
// -> date