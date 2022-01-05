import { useAsync } from "react-async";
import { Container } from "react-bootstrap";
import PCBListElement from '../components/PCBListElement';

const loadPCBs = async () => 
    await fetch("/api/list?page=1&num=10").then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function PCB() {

    const { data, err, isLoading } = useAsync({ promiseFn: loadPCBs})
    console.log(isLoading, err, data)
    if (isLoading) return (<div>Loading...</div>)
    if (err) return (<div>Error</div>)
    if (data) return (
        <Container>
            {data.entries.map((pcb, key)=>
                <PCBListElement key={key} {...pcb} />
            )}
        </Container>
    )
    return (<div></div>);
}