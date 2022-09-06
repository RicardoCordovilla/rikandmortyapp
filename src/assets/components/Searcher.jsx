import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Searcher = ({ setLocationIdSearch }) => {

    const [locationId, setLocationId] = useState()

    const [locations, setLocations] = useState([])

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    let arr = []
    useEffect(() => {
        if (!locations.length) {
            for (let i = 1; i < 127; i++) {
                axios.get(`https://rickandmortyapi.com/api/location/${i}`)
                    .then(res => {
                        arr.push({
                            'name': res?.data.name,
                            'id': i
                        }
                        )
                        setLocations(arr)
                    })
                    .catch(err => console.log(err))
            }
        }
        const results = locations.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        )
        setSearchResults(results)
    }, [searchTerm])



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('locationId:', locationId)
        setLocationIdSearch(locationId)

    }


    const handleChange = event => {
        const locationName = event.target.value
        let value = Number(locationName)

        const filterName = locations.filter(item => item.name === locationName)
        if (filterName.length > 1)
            setLocationId(filterName[0].id)

        if (typeof Number(locationName) === 'number') {
            if (value > 0 && value < 127) {
                setLocationId(value)
            }
            else if (value > 126) {
                value = 126
                setLocationId(value)
            }
        }
        // console.log('locationId:', locationId)
        setSearchTerm(event.target.value)
    }



    // console.log(locations)

    return (
        <div className='formBx'>
            <form onSubmit={handleSubmit} className='searchForm'>
                <label>
                    Name:
                </label>
                <input id='location' className='searchForm__input'
                    placeholder='Input a location: like=> 1,2 or location name'
                    type="text"
                    onChange={handleChange}
                    value={searchTerm}
                    list='list'
                // value={locationId}
                />
                <datalist id='list'>
                    {searchResults.map(item => (
                        <option value={item.name} />
                    ))}
                </datalist>




                <input type="submit" value="Search" className='searchForm__btn' />


            </form>




        </div>


    )

}

export default Searcher