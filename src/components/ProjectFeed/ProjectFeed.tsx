import Async, { PromiseFn } from "react-async";
import { Row, Col, Container, Card, Button, Spinner } from "react-bootstrap";

export type ProjectFeedProps = {
  num: number;
};

const truncate = (input:any) => input.length > 5 ? `${input.substring(0, 50)}...` : input;

export default function ProjectFeed(props: ProjectFeedProps) {
  const loadProjects: PromiseFn<any> = async () => {
    /* URL mit Projekteinträgen aus dem Forum */
    const result = await fetch(
      "https://kurzschluss.group/tags/Projekte.rss"
    ).then((res) => (res.ok ? res : Promise.reject(res)));
    const body = await result.text();
    const feed = new window.DOMParser().parseFromString(body, "text/xml");
        console.log(feed.body);
    const items = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => {
      let found = false;
      el.querySelectorAll("category").forEach((category:any) => {
        if (category.textContent === "Projekte") {
          found = true;
        }
      });
      return {
        link: el.querySelector("link")?.innerHTML,
        title: truncate(el.querySelector("description")?.textContent?.replace(/<\/?[^>]+(>|$)/g, " ")),
        image_url: el.querySelector("content")?.attributes.getNamedItem("url")?.value,
        found: found,
      };
    });

    const filteredFeed = feedItems.filter((item)=>{
        return (item.found === true);
    })

    console.log(filteredFeed);
    return filteredFeed.slice(0, props.num);
  };

  return (
    <Async promiseFn={loadProjects}>
      <Async.Pending>
        <Spinner animation="border" style={{ alignContent: "center" }} />{" "}
        Loading...
      </Async.Pending>
      <Async.Fulfilled>
        {(data: any) => {
          const projects = data;
          return (
            <Container>
              <Row>
                {projects.map((topic: any, key: number) => (
                  <Card as={Col} key={key} lg={3} style={{ margin: ".5em" }}>
                    <a href={topic.link}>
                      <Card.Img
                        variant="top"
                        src={topic.image_url}
                        className={"projectImage"}
                        width={"100%"}
                        height={"350"}
                      />
                    </a>
                    <Card.Body>
                      <Card.Title >{topic.title}</Card.Title>
                      <Button
                        variant="primary"
                        href={topic.link}
                      >
                        Mehr...
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </Container>
          );
        }}
      </Async.Fulfilled>
      <Async.Rejected>
        <Container><Row>Error</Row></Container>
      </Async.Rejected>
    </Async>
  );
}
