import { useEffect, useState } from 'react'
import Location from './assets/components/Location'
import './App.css'

import Searcher from './assets/components/Searcher'
import axios from 'axios'
import ResidentsInfo from './assets/components/ResidentsInfo'
import Hero from './assets/components/Hero'

function App() {



  const randomId = Math.ceil(Math.random() * 126)

  const [locationId, setLocationId] = useState(randomId)
  const [locationInfo, setLocationInfo] = useState('')


  useEffect(() => {
    let url
    if (locationId < 1) setLocationId(1)
    axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then(res => {
        console.log(res.data)
        setLocationInfo(res.data)
      })
      .catch(err => console.log('Invalid url'))
  }, [locationId])


  return (
    <div className="App">

      <Hero/>

      <Searcher
        setLocationIdSearch={setLocationId}
      />

      <Location
        locationInfo={locationInfo}
      />

      <ResidentsInfo
        residents={locationInfo?.residents}
      />

    </div>
  )
}

export default App
