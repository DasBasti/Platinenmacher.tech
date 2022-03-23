import { useEffect } from 'react';
import { useAsync } from 'react-async';
import LED from '../components/LED';

const loadLEDs = async () =>
    await fetch("/panel").then(res => (res.ok ? res : Promise.reject(res))).then(res => res.json())


export default function Panel() {
    const { data, isLoading, run } = useAsync({ deferFn: loadLEDs })

    useEffect(()=>{
        run(loadLEDs)
    },[run])

    if (isLoading) return (<div>Loading...</div>)
    if (data) {
        let rows = [];

        for (let x = 0; x < 32; x++) {
            let row: Array<JSX.Element> = [];
            for (let y = 0; y < 32; y++) {
                const offset = x * 32 + y;
                if (data[offset]) {
                    row.push(<td className='led-table-row'>
                        <LED key={data[offset].id} {...data[offset]} />
                    </td>);
                } else {
                    row.push(<td className='led-table-row'>
                        <LED key="letze" animation={false} color={0} id={1024} owner={""} last_seen={""} />
                    </td>);
                }
            }
            rows.push(row);
        }

        return <div style={{ display: 'flex', justifyContent: "center" }}><table className='led-table'>
            {rows.map((row: Array<JSX.Element>, key: number) =>
                <tr key={key}>
                    {row.map((led) => led)}
                </tr>)
            }
        </table></div>
    }

    return (
        <div>
            ?
        </div>
    )
}