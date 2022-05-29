import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import InfiniteScroll from "react-infinite-scroll-component";
import PCBListElement from "../components/PCBListElement";
import { PCBListElementProps } from "../components/PCBListElement/PCBListElement";
import { getToken, getUid } from "../helper/login";

const loadPCBs = async (props: any) => {
  let url = "/pcb/api/list?page=" + props.page + "&num=" + props.num;
  if (props.user_name_filter !== "") url += "&name=" + props.user_name_filter;
  return await fetch(url, {
    headers: { User: getUid(), Bearer: getToken() },
  })
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());
};
const loadUsers = async () =>
  await fetch("/pcb/api/user_list", {
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
  const [user_name_filter, setUsernameFilter] = useState("");
  const [full_list, updateFullList] = useState<any[]>([]);
  const [user_list, updateUserList] = useState<any[]>([]);

  const updateListFromServer = () => {
    loadPCBs({ page, num, user_name_filter }).then((data) => {
      const new_list = arrayUnique([...full_list, ...data.entries]);
      if (new_list) updateFullList(new_list);
    });
  };

  useEffect(
    updateListFromServer,
    // eslint-disable-next-line
    [page, num]
  );

  useEffect(() => {
    loadUsers().then((data) => {
      updateUserList(data);
    });
  }, []);

  const reload_next = () => {
    setPage(page + 1);
  };

  const setFilter = (username: string) => {
    setUsernameFilter(username);
    setPage(0);
    updateFullList([]);
    updateListFromServer();
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Typeahead
              id="user_search_box"
              onChange={(selection) => {
                if (selection.length) setFilter(selection[0] as string);
                else setFilter("");
              }}
              options={user_list}
              selected={[user_name_filter]}
            />
          </Col>
          <Col>
            <Button
              variant="danger"
              onClick={() => {
                setFilter("");
              }}
            >
              X
            </Button>
          </Col>
        </Row>
        <InfiniteScroll
          dataLength={full_list.length} //This is important field to render the next data
          next={reload_next}
          hasMore={true}
          loader={
            <h4 style={{ textAlign: "center" }}>
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
            <PCBListElement
              key={key}
              {...pcb}
              onUsernameClick={(username: string) => {
                setFilter(username);
              }}
            />
          ))}
        </InfiniteScroll>
      </Container>
    </Container>
  );
}
