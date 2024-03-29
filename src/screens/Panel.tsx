import { useContext, useEffect, useState } from "react";
import { useAsync } from "react-async";
import LED from "../components/LED";
import { LEDProps, number_to_color } from "../components/LED/LED";
import { Typeahead } from "react-bootstrap-typeahead";
import { debounce } from "lodash";
import { getUsername } from "../helper/login";
import { Button, ButtonGroup, Col } from "react-bootstrap";
import ChatContext from "../context/chat";

const loadLEDs = async () =>
  await fetch("/pcb/panel")
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

export default function Panel() {
  const { data, isLoading, run } = useAsync({ deferFn: loadLEDs });
  const [panel_data, updatePanelData] = useState<Array<LEDProps>>();
  const [usernames, setUsernames] = useState<Array<string>>([]);
  const [username, setUsername] = useState<string>("");
  const [color, setColor] = useState(0);
  const [realtime, setRealtime] = useState<Boolean>(true);

  const chat = useContext(ChatContext);

  const search_for = debounce((search: string | undefined) => {
    if (!search) return;
    if (!data) return;
    var temp_data = [...data];
    temp_data.map((led: any, idx: number) => {
      if (led.owner?.toLowerCase() === search.toLowerCase()) {
        temp_data[idx].highlight = true;
        updatePanelData(temp_data);
      } else {
        temp_data[idx].highlight = false;
      }
      return temp_data[idx];
    });
    updatePanelData(temp_data);
  }, 300);

  useEffect(() => {
    run(loadLEDs);
  }, [run]);

  useEffect(() => {
    if (data) {
      updatePanelData(data);
      setUsernames([
        ...data.map((u: any) => u.owner).filter((e: string) => (e ? e : false)),
      ]);
      data.forEach((u: any) => {
        if (u.owner === username.toLowerCase()) setColor(u.color);
      });
    }
  }, [updatePanelData, data, username, setColor]);

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (panel_data) {
    let rows = [];

    for (let x = 0; x < 32; x++) {
      let row: Array<JSX.Element> = [];
      for (let y = 0; y < 32; y++) {
        const offset = x * 32 + y;
        if (panel_data[offset]) {
          row.push(
            <td className="led-table-row" key={panel_data[offset].id}>
              <LED {...panel_data[offset]} realtime={realtime}/>
            </td>
          );
        } else {
          row.push(
            <td className="led-table-row" key="letze">
              <LED
                animation={false}
                color={0}
                id={1024}
                owner={""}
                last_seen={""}
              />
            </td>
          );
        }
      }
      rows.push(row);
    }

    const updateLedColor= (color:string)=>{
      setColor(parseInt(color.substring(1), 16));
      chat?.say("Platinenmacher", "!led "+color);
      run(loadLEDs);
    }

    return (
      <div>
        <div style={{ position: "absolute", margin: 5, width: "250px" }}>
          <Col>
            <ButtonGroup aria-label="Anzeigeoptionen">
              <Button
                variant={realtime ? "primary" : "outline-primary"}
                onClick={() => setRealtime(true)}
              >
                Echtzeit
              </Button>
              <Button
                variant={realtime ? "outline-primary" : "primary"}
                onClick={() => setRealtime(false)}
              >
                Alle
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <label htmlFor="user_search_box">Suche: </label>
            <Typeahead
              id="user_search_box"
              onChange={(selection) => {
                if (selection.length) search_for(selection[0] as string);
              }}
              options={usernames}
            />
          </Col>
          <Col>
            <div id="info">
              <p>
                Du hast deine LED als Chatteilnehmer bereits erhalten! Mit
                diesen Befehlen kannst du deine LED Farbe bestimmen:
              </p>
              <p>
                <ul>
                  <li>!led 1-255 1-255 1-255</li>
                  <li>
                    !led CSS3-Name (https://www.cssportal.com/css3-color-names)
                  </li>
                  <li>!led #Hexwert</li>
                </ul>
              </p>
              <div id="led" style={{ height: 50, width: 50, margin: 5 }}>
                <input 
                  type={"color"} 
                  value={number_to_color(color)}
                  style={{ backgroundColor: number_to_color(color), border: "none" }}
                  className={"led"}
                  onChange={(e)=>{updateLedColor(e.target.value)}}
                />
              </div>
              <p>
                Ausschalten kannst du deine LED mit <strong>!led off</strong>
              </p>

              <p>
                Mit <strong onClick={()=>chat?.say("Platinenmacher", "!led info")}>!led info</strong> oder <strong  onClick={()=>chat?.say("Platinenmacher", "!led status")}>!led status</strong>{" "}
                kannst du abfragen wo deine LED ist.
              </p>

              <p>
                Es gibt ein paar Effekte für deine LED, die kannst du an dein
                !led Kommando anhängen:
              </p>
              <ul>
                <li onClick={()=>chat?.say("Platinenmacher", "!led blink")}>!led blink</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led rainbow")}>!led rainbow</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led boom")}>!led boom</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led fastbow")}>!led fastbow</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led morse Ich benutze platinemacher.tech. Und du solltest das auch tun.")}>!led morse</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led identify")}>!led identify</li>
                <li onClick={()=>chat?.say("Platinenmacher", "!led stop")}>!led stop</li>
              </ul>
              <p>
                DISCOMODE kann mit <strong  onClick={()=>chat?.say("Platinenmacher", "!led disco")}>!led disco</strong> aktiviert werden.
              </p>
              <p>
                Eine Runde Game of Life kannst du mit <strong onClick={()=>chat?.say("Platinenmacher", "!led gol")}>!led gol</strong>{" "}
                starten
              </p>
            </div>
          </Col>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table className="led-table">
            <tbody>
              {rows.map((row: Array<JSX.Element>, key: number) => (
                <tr key={key}>{row.map((led) => led)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return <div>?</div>;
}
