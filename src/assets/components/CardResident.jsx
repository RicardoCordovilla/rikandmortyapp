import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const CardResident = ({ url }) => {
    const [info, setInfo] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))
    }, [])


    // console.log(info)

    if (info) {
        return (
            <div className='cardResident'>
                <img src={info?.image} alt="" />
                <div className='residentSatus'>
                    <span className={`statusCircle ${info?.status}`}></span><span>{info?.status}</span>
                </div>
                <div className='cardResident__info'>
                    <h3 className='cardResident__name'>{info?.name}</h3>
                    <h4>TYPE</h4>
                    <span>{info?.type?info.type:'No Type'}</span>
                    <h4>ORIGIN</h4>
                    <span>{info?.origin.name}</span>
                    <h4>EPISODES APPEAR</h4>
                    <span>{info?.episode.length}</span>
                </div>
            </div>
        )
    }

    if(!info){

        return (
            <div className='cardResident'>
                <img alt="" className='imgLoading'/>
                <div className='residentSatus residentLoading' >
                    <span className='unknown'></span><span>loading..</span>
                </div>
                <div className='cardResident__info'>
                    <h3 className='cardResident__name'>Loading..</h3>
                    <h4>TYPE</h4>
                    <span>Loading..</span>
                    <h4>ORIGIN</h4>
                    <span>Loading..</span>
                    <h4>EPISODES APPEAR</h4>
                    <span>Loading..</span>
                </div>
            </div>
        )

    }

}

export default CardResident