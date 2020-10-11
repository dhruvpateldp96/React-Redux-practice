import React, {useState, useEffect} from 'react'
import './SideBar.css'
import { Avatar, IconButton } from '@material-ui/core'
import  SearchIcon  from '@material-ui/icons/Search'
import  RateReviewOutlinedIcon  from '@material-ui/icons/RateReviewOutlined'
import SideBarChat from './SideBarChat'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from './firebase'

function SideBar() {

    const user = useSelector(selectUser)
    const [chats, setChats] = useState([])

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => 
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        )
    }, [])
    
    const addChat = () => {
        const chatName = prompt("Plese enter chatName")
        if (chatName) {
            db.collection('chats').add({
                chatName: chatName,
            })
        }
    }
    return (
        <div className="sidebar">
            {/* Ssiderbar__Header */}
            <div className="sidebar__header">
                <Avatar onClick={()=>auth.signOut()} className="sidebar__avatar" src={user.photo}/>
                <div className="sidebar__input">
                    <SearchIcon/>
                    <input placeholder="Search"/>
                </div>

                    <IconButton variant="outline" className="sidebar__inputButton">
                        <RateReviewOutlinedIcon onClick={addChat}/>
                    </IconButton>
            </div>
            {/* SideBar__Chat */}
            <div className="sidebar__chat">
                {chats.map(({id, data: { chatName }}) => <SideBarChat key={id} id={id} chatName={chatName}/>)}
                

            </div>
        </div>
    )
}

export default SideBar
