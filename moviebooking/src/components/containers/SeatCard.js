import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSeating } from '../../actions/searchActions'

const SeatCard = ({reservedSeating, id}) => {


    const dispatch = useDispatch()
    const handleChange = (e,id) => {
        e.preventDefault()
        dispatch(setSeating(id))
        // let div = document.getElementById(incomingId)
        // if (div.classList.contains("bg-success")){
        //     div.classList.remove("bg-success");
        //     div.classList.add("bg-dark");

        // }else{
        //     div.classList.remove("bg-dark");
        //     div.classList.add("bg-success");
        // }
        
    }
    
    return (
        <div className="col-xs-1 m-1" onClick={(e)=> handleChange(e,id)}>
                <button className={`card card-body ${reservedSeating.includes(id) ? "bg-success" : "bg-dark"} text-center`} id={id} style={{"width": "70px","height": "70px"}}>
                <p className="text-light card-text-sm">
                    {id}
                </p>
                </button>
            
        </div>
    )
}

export default SeatCard
