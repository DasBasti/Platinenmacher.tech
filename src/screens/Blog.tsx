import { useAsync } from "react-async";
import { Container } from "react-bootstrap";
import PCBListElement from '../components/PCBListElement';

const loadPCBs = async () => /* URL mit Einträgen */
    await fetch("/api/list?page=1&num=10").then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function Blog() {
    //const { data, err, isLoading } = useAsync({ promiseFn: loadPCBs})
    //if (isLoading) return (<div>Loading...</div>)
    //if (err) return (<div>Error</div>)
    //if (data) return (
        <Container>
            
        </Container>
    //)
    return (<div>Welcome</div>);
}