import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import PCBListElement from "../components/PCBListElement";
import { PCBListElementProps } from "../components/PCBListElement/PCBListElement";
import { getToken, getUid } from "../helper/login";

const loadPCBs = async (props: any) =>
  await fetch("/pcb/api/list?page=" + props.page + "&num=" + props.num, {
    headers: { User: getUid(), Bearer: getToken() },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

function arrayUnique(array: any[]): any[] {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

export default function PCB() {
  const [page, setPage] = useState(1);
  const [num] = useState(10);
  const [full_list, updateFullList] = useState<any[]>([]);

  useEffect(() => {
    loadPCBs({ page, num }).then((data) => {
      const new_list = arrayUnique([...full_list, ...data.entries]);
      if (new_list) updateFullList(new_list);
    });
  },
  // eslint-disable-next-line
  [page, num]);

  const reload_next = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      <Container>
        <InfiniteScroll
          dataLength={full_list.length} //This is important field to render the next data
          next={reload_next}
          hasMore={true}
          loader={
            <h4 style={{textAlign:"center"}}>
              <Spinner animation="border" style={{ alignContent: "center" }} />{" "}
              laden...
            </h4>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {full_list.map((pcb: PCBListElementProps, key: number) => (
            <PCBListElement key={key} {...pcb} />
          ))}
        </InfiniteScroll>
      </Container>
    </Container>
  );
}
