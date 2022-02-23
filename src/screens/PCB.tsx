import { useAsync } from "react-async";
import { Container } from "react-bootstrap";
import PCBListElement from '../components/PCBListElement';
import { PCBListElementProps } from "../components/PCBListElement/PCBListElement";

var page=1;
var num=10;
const loadPCBs = async () => 
    await fetch("/api/list?page="+page+"&num="+num).then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function PCB() {
    const { data, isLoading } = useAsync({ promiseFn: loadPCBs})

    

    console.log(isLoading, data)
    if (isLoading) return (<div>Loading...</div>)
    if (data) return (
        <Container>
            {data.entries.map((pcb:PCBListElementProps, key:number)=>
                <PCBListElement key={key} {...pcb} />
            )}
        </Container>
    )
    return (<div></div>);
}