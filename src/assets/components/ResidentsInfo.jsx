import axios from 'axios'
import { useState } from 'react'
import CardResident from './CardResident'
import Pagination from './Pagination'

const ResidentsInfo = ({ residents }) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(6)

    const indexLastCard = currentPage * cardsPerPage
    const indexFirstCard = indexLastCard - cardsPerPage
    const cards = residents?.slice(indexFirstCard, indexLastCard)

    // console.log(residents)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if (residents?.length > 0)
        return (
            <div className='bodyResidents'>
                <div className='residentsContainer'>
                    {
                        cards?.map(resident => (
                            <CardResident
                                key={resident}
                                url={resident}
                            />
                        ))
                    }
                </div>
                    <Pagination
                        cardsPerPage={cardsPerPage}
                        totalCards={residents.length}
                        paginate={paginate}
                    />

            </div>
        )
    if (residents?.length === 0) {

        return (
            <div className="noResidentsContainer">
                <h1>NO RESIDENTS IN THIS DIMENSION</h1>
            </div>
        )
    }

    if (!residents)
        return (
            <div className="loadingResidents">
                <h1>Loading...</h1>
                <CardResident
                    url={''}
                />
            </div>
        )
}

export default ResidentsInfo