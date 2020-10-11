import React from 'react'
import "./SideBarChat.css"
import { Avatar } from '@material-ui/core'

function SideBarChat({id, chatName}) {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last Message</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SideBarChat
