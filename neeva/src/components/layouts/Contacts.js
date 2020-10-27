import React from 'react'

function Contacts({id,name,company}) {
    // console.log(JSON.stringify(arguments))
    return (
        <div className="jumbotron">
            <h1>Contacts Event</h1>
            {/* {args && args.forEach((att) => console.log(att))} */} 
             <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{company}</h2>
        </div>
    )
}

export default Contacts
