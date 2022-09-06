import React, { useState } from 'react'

const Location = ({locationInfo}) => {
    // console.log(locationInfo)
    return (
        <div className='cardLocationInfo'> 
            <p>
                <span>Name:</span>
                <span>{locationInfo?.name}</span>
            </p>
            <p>
                <span>Type:</span>
                <span>{locationInfo?.type}</span>
            </p>
            <p>
                <span>Dimension:</span>
                <span>{locationInfo?.dimension}</span>
            </p>
            <p>
                <span>Population:</span>
                <span>{locationInfo?.residents?.length}</span>
            </p>

        </div>

    )
}

export default Location