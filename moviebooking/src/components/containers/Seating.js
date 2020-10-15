import React, { useEffect } from 'react'
import SeatCard from './SeatCard'
import { useSelector, useDispatch } from 'react-redux'
import { setSeating } from '../../actions/searchActions'

const Seating = () => {
    const totalSeats = useSelector(state => state.seatings.totalSeats)
    const reservedSeating = useSelector(state => state.seatings.reservedSeating)

    const totalSeatsState = [...Array(totalSeats).keys()]
    
    return (
        <div className="jumbotron d-flex align-items-center">
            <div className="container p-auto">
                    <div className="row">
                        {totalSeatsState.map((seatId) => <SeatCard reservedSeating={reservedSeating} id={seatId} key={seatId}/>)}
                    </div>
                    <div className="row d-flex justify-content-center">
                       <span className="font-weight-bold text-dark">
                            <h2>
                                Total Seats: {reservedSeating ? reservedSeating.length : 0}
                            </h2>
                            <button className="btn btn-outline-success">
                                <h2>
                                    Buy Tickets: { reservedSeating ? reservedSeating.length * 90 : 0}
                                </h2>
                            </button>
                            
                       </span>
                    </div>
            </div>

        </div>
    )
}

export default Seating
