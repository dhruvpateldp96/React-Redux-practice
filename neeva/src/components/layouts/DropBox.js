import React from 'react'

function DropBox({id,path,title}) {
    // console.log(JSON.stringify(arguments))
    return (
        <div className="jumbotron">
            <h1>DropBox event</h1>
            {/* {args && args.forEach((att) => console.log(att))} */} 
             <h2>{id}</h2>
            <h2>{path}</h2>
            <h2>{title}</h2>
        </div>
    )
}

export default DropBox
