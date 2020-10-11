import React, { useState } from 'react'
import './Chat.css'
import { IconButton } from '@material-ui/core'
import MicNoneIcon from '@material-ui/icons/MicNone'

function Chat() {
    const [input, setInput] = useState("")    
    const sendMessage= (e) => {
        e.preventDefault();
        //Firebase
        setInput("")
    }
    return (
        <div className="chat">
            {/* header */}
            <div className="chat__header">
                <h4>To: <span className="chat_name">Channel Name</span></h4>
                <strong>Details</strong>
            </div>
            {/* chat messages */}
            <div className="chat__messages">
                <h2>I am a message</h2>
                <h2>I am a message</h2>

            </div>
            {/* chat input */}
            <div className="chat__input">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Message" type="text"/>
                    <button onClick={sendMessage}> Send Message </button>
                </form>
                <IconButton>
                    <MicNoneIcon className=""/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
