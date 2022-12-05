import { useEffect, useState } from 'react';
import useFetch from '../customize/fetch';
const Covid = () => {
    const url = 'https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-04-02T00:00:00Z'

    const { data: dataCovid, isLoading, isError } = useFetch(url)
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