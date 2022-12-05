import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment';

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(async () => {
        try {
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-04-02T00:00:00Z')
            console.log('>>> check res ', res.data);
            let data = res && res.data ? res.data : []
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY')
                })
            }
            console.log('>>> check set data: ', data);

            data = data.reverse()
            setDataCovid(data)
            setIsLoading(false)
            setIsError(false)
        } catch (e) {
            setIsError(true)
            setIsLoading(false)
            console.log('>>> check error', e);
        }


    }, [])
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {
                    !isError && !isLoading && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })
                }

                {isLoading && <tr ><td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td></tr>}
                {isError && <tr ><td colSpan='5' style={{ 'textAlign': 'center' }}>Something wrong...</td></tr>}
            </tbody>
        </table >
    )
}

export default Covid