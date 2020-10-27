import React from 'react'

function Tweet({id,title,date}) {
    // console.log(JSON.stringify(arguments))
    return (
        <div className="jumbotron">
            <h1>Tweet Event</h1>
            {/* {args && args.forEach((att) => console.log(att))} */} 
             <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{date}</h2>
        </div>
    )
}

export default Tweet
