import React, { useEffect, useState } from 'react'
import classes from './index.module.css'
import { useQuery, gpl } from '@apollo/client'
import { CONTINENTS } from '../../graphql/grapgql'
import Country from '../country/Country'

const Continents = (props) => {

    const [listContinents, setListContinents] = useState([]) /* intiating the listContinets to an empty array */
    const [listCountries, setListCountries] = useState([]) /* intiating the listCountries to an empty array */
    const [toggle, setToggle] = useState('')
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
        setToggle(continent.code)
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
                            <div className={toggle !== continent.code ? classes.continents : classes.continentSelected} key={id}>
                                <a className={classes.continentName} onClick={() => getCountries(continent)}>{continent.name}</a>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.countriesContainer}>
                    {/* Mapping through country details */}
                    {listCountries.map((country, id) => {
                        return <Country
                            name={country.name}
                            native={country.native}
                            capital={country.capital}
                            currency={country.currency}
                        />
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Continents;