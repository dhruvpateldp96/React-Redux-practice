import React from 'react'

function Slack({id,channel,author,message}) {
    // console.log(JSON.stringify(arguments))
    return (
        <div className="jumbotron">
            <h1>Slack Event</h1>
            {/* {args && args.forEach((att) => console.log(att))} */} 
             <h2>{id}</h2>
            <h2>{channel}</h2>
            <h2>{author}</h2>
            <h2>{message}</h2>
        </div>
    )
}

export default Slack
