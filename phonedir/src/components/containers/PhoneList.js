import React from 'react'
import {useDispatch} from "react-redux"
import {deleteContact} from "../../actions/searchActions"

const PhoneList = ({contactList}) => {

    const dispatch = useDispatch()
    const handleDelete = (e, params) => {
        // console.log(params.item.phone)
        if (e.target.title == "Delete"){
            console.log(e.target.title)
            let phone = params.item.phone
            console.log(e.target.parentNode.parentNode.children[2].innerText)
            dispatch(deleteContact(phone))

        }
        
    }

    let content = contactList ? contactList.map((item) => (
        <div className="row py-3 mb-2 border" key={item.phone}>
            <div className="col-md-3">
                {item.email}
            </div>      
            <div className="col-md-3">
                {item.name}
            </div>  
            <div className="col-md-3">
                {item.phone}
            </div>
            <div className="col-md-1">
                <i className="fa fa-pencil mx-2" title="Edit" ></i>
                <i className="cursor-pointer fas fa-trash mx-1" title="Delete" onClick={(e) => handleDelete(e, {item})}></i>
            </div>
        </div> 
        )) : null

    return (
        <div>
            <div className="container border" draggable>
                {/* <div className="row justify-content-space-between"> */}
                    {content && content}
                {/* </div> */}
                <br/>
            </div>
        </div>
    )
}

export default PhoneList
