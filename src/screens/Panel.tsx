import { useEffect, useRef, useState } from 'react';
import { useAsync } from 'react-async';
import LED from '../components/LED';
import { LEDProps } from '../components/LED/LED';
import { Typeahead } from 'react-bootstrap-typeahead';
import { debounce } from 'lodash';
import { Option } from 'react-bootstrap-typeahead/types/types';

const loadLEDs = async () =>
    await fetch("/pcb/panel").then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function Panel() {
    const { data, isLoading, run } = useAsync({ deferFn: loadLEDs })
    const search_string = useRef<HTMLInputElement>(null);
    const [panel_data, updatePanelData] = useState<Array<LEDProps>>();
    const [usernames, setUsernames] = useState<Array<string>>([]);

    const search_for = debounce((search: string | undefined) => {
        if (!search)
            return;
        if (!data)
            return;
        var temp_data = [...data];
        temp_data.map((led: any, idx: number) => {
            if (led.owner?.toLowerCase() === search.toLowerCase()) {
                temp_data[idx].highlight = true;
                updatePanelData(temp_data);
            } else {
                temp_data[idx].highlight = false;
            }
            return temp_data[idx];
        })
        updatePanelData(temp_data);
    }, 300);

    useEffect(() => {
        run(loadLEDs);
    }, [run])

    useEffect(() => {
        if (data){
                        updatePanelData(data);
                        setUsernames([...data.map((u:any)=>u.owner).filter((e:string)=>e?e:false)]         
                        );
        }
    }, [updatePanelData, data])

    if (isLoading) return (<div>Loading...</div>)
    if (panel_data) {
        let rows = [];

        for (let x = 0; x < 32; x++) {
            let row: Array<JSX.Element> = [];
            for (let y = 0; y < 32; y++) {
                const offset = x * 32 + y;
                if (panel_data[offset]) {
                    row.push(<td className='led-table-row' key={panel_data[offset].id}>
                        <LED {...panel_data[offset]} />
                    </td>);
                } else {
                    row.push(<td className='led-table-row' key="letze">
                        <LED animation={false} color={0} id={1024} owner={""} last_seen={""} />
                    </td>);
                }
            }
            rows.push(row);
        }

        return <div>
            <div style={{ position: 'absolute', margin: 5 }}>
                <label htmlFor='search'>User: </label>
                <Typeahead
                id='user_search_box'
                    onChange={(selection) => { if(selection.length)search_for(selection[0] as string); }}
                    options={usernames}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <table className='led-table'>
                    <tbody>
                        {rows.map((row: Array<JSX.Element>, key: number) =>
                            <tr key={key}>
                                {row.map((led) => led)}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }

    return (
        <div>
            ?
        </div>
    )
}