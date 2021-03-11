import React, { useEffect, useState } from 'react'
import classes from './index.module.css'
import { useQuery, gpl } from '@apollo/client'
import { CONTINENTS } from '../../graphql/grapgql'

const Continents = (props) => {

    const [listContinents, setListContinents] = useState([]) /* intiating the listContinets to an empty array */
    const [listCountries, setListCountries] = useState([]) /* intiating the listCountries to an empty array */
    const { loading, error, data } = useQuery(CONTINENTS) /*Sending query to the endpoint using UseQuery Hook*/

    useEffect(async () => {
        if (data) {
            /* store continents data from endpoint in variable response*/
            let response = await data['continents']
            setListContinents(response)
        }
    }, [data])

    /*onClick function to fetch individual continent data */
    const getCountries = (continent) => {
        let country = continent.countries
        setListCountries(country)
    }
    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>
    return (
        <div className={classes.mainContainer}>
            <div className={classes.header}>
                <h1>List of continets</h1>
            </div>
            <div className={classes.contentContainer}> 
                <div className={classes.continentsContainer}>
                    {/* Mapping through continents */}
                    {listContinents.map((continent, id) => {
                        return (
                            <div className={classes.continents} key={id}>
                                <a className={classes.continentName} onClick={() => getCountries(continent)}>{continent.name}</a>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.countriesContainer}>
                    {/* Mapping through country details */}
                    {listCountries.map((country, id) => {
                        return (
                            <div className={classes.country}>
                                <p>Name: {country.name}</p>
                                <p>Native: {country.native}</p>
                                <p>Captial: {country.capital}</p>
                                <p>Currency: {country.currency}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Continents;