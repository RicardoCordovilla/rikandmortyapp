import React from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    const cliked = (e) => {
        console.log(e.target.id)
    }

    return (
        <>


            <nav className='paginationBx'>

                {
                    pageNumbers.map(n => (
                        <div className='btnPageBx'>
                            <input type="radio" className='hiden' name='pages'
                                id={n}
                                value={n}
                            // onClick={(e) => {
                            //     e.target.classList.toggle('btnActive')
                            //     paginate(n)
                            // }}
                            />
                            <label
                                key={n}
                                htmlFor={n}
                                className='btnPage lbl-radio'
                                onClick={(e) => {
                                    e.target.classList.toggle('btnActive')
                                    paginate(n)
                                }}
                            >
                                {n}

                            </label>
                        </div>

                    ))
                }


            </nav>
        </>

    )
}

export default Pagination
