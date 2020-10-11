import React from 'react'
import './Imessage.css'
import SideBar from './SideBar'
import Chat from './Chat'

function Imessage() {
    return (
        <div className="imessage">
            {/* Sidebar */}
            <SideBar/>

            {/* Chat */}
            <Chat/>

        </div>
    )
}

export default Imessage
