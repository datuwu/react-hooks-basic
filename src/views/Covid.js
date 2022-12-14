import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import useFetch from '../customize/fetch';
const Covid = () => {
    // const today = new Date(new Date().setHours(0, 0, 0, 0))
    // const priorDay = moment().subtract(30, `days`)

    const today = moment().startOf(`day`).toISOString(true)
    const priorDay = moment().startOf(`day`).subtract(30, `days`).toISOString(true)
    const url = `https://api.covid19api.com/country/vietnam?from=${priorDay}&to=${today}`


    const { data: dataCovid, isLoading, isError } = useFetch(url, true)
    return (
        <>
            <h3>Covid tracking in Vietnam</h3>
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
        </>
    )
}

export default Covid