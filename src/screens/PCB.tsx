import { useEffect, useState } from "react";
import { useAsync } from "react-async";
import { Container, Pagination } from "react-bootstrap";
import PCBListElement from '../components/PCBListElement';
import { PCBListElementProps } from "../components/PCBListElement/PCBListElement";

const loadPCBs = async (props:any) => 
    await fetch("/pcb/api/list?page="+props.page+"&num="+props.num).then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function PCB() {
    const [page, setPage] = useState(1);
    const [num] = useState(10);
    const { data, isLoading, reload } = useAsync({ promiseFn:loadPCBs, page, num})
   
    useEffect(()=>{
        reload()
    },[reload, page])

    if (isLoading) return (<div>Loading...</div>)
    if (data) {
        let pages = [];
        for (let number = 1; number <= Math.ceil(data.total/num); number++) {
        pages.push(
            <Pagination.Item key={number} active={number === page} onClick={()=>{setPage(number)}}>
            {number}
            </Pagination.Item>,
        );
        }
        return (
        <Container>
        <Container>
            {data.entries.map((pcb:PCBListElementProps, key:number)=>
                <PCBListElement key={key} {...pcb} />
            )}
        </Container>
        <Pagination style={{flexWrap:'wrap'}} >{pages}</Pagination>
        </Container>
    )}
    return (<div></div>);
}