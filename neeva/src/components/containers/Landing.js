import React, {useEffect, useState} from 'react'
import Footer from "../layouts/Footer"  
import Navbar from "../layouts/Navbar"  
import { fetchCalendarData, fetchContactsData, fetchDropboxData, fetchSlackData, fetchTweetData } from '../../actions/searchActions'
import {useSelector, useDispatch} from 'react-redux'
import Calendar from '../layouts/Calendar'
import Contacts from '../layouts/Contacts'
import DropBox from '../layouts/DropBox'
import Slack from '../layouts/Slack'
import Tweet from '../layouts/Tweet'
import { Link } from 'react-router-dom'

const Landing = () => {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    
    // const [timer, setTimer] = useState(0)
    // setInterval(() => {
    //     setTimer(prevState => prevState+1)
    // }, 5000);
    useEffect(() => {
        function callApi() {
            dispatch(fetchCalendarData());
            dispatch(fetchContactsData());
            dispatch(fetchDropboxData());
            dispatch(fetchSlackData());
            dispatch(fetchTweetData());
        }
        callApi()
        const interval = setInterval(() => callApi(), 15000)
        return () => {
          clearInterval(interval);
        }
        }, [])
    
    const calendar = useSelector(state => state.data.calendar)
    const contacts = useSelector(state => state.data.contacts)
    const dropbox = useSelector(state => state.data.dropbox)
    const slack = useSelector(state => state.data.slack)
    const tweet = useSelector(state => state.data.tweet)
    const allResults = [...calendar, ...contacts, ...dropbox, ...slack, ...tweet]
    const filter = useSelector(state => state.data.filters)

    // console.log(allResults);

    //objects.map(obj => obj.matchingTerms)
    const filteredCalendarData = calendar && calendar.filter(obj => obj.matching_terms.includes(filter)) 
    const filteredContactsData = contacts && contacts.filter(obj => obj.matching_terms.includes(filter))
    const filteredDropBoxData = dropbox && dropbox.filter(obj => obj.matching_terms.includes(filter))
    const filteredSlackData = slack && slack.filter(obj => obj.matching_terms.includes(filter)) 
    const filteredTweetData = tweet && tweet.filter(obj => obj.matching_terms.includes(filter)) 
    // console.log(fi)

    const renderAll = filteredCalendarData ? filteredCalendarData.map((obj) => <div><Calendar key={obj.id} id={obj.id} title={obj.title} date={obj.date}/><Contacts key={obj.id} id={obj.id} name={obj.name} company={obj.company}/><DropBox key={obj.id} id={obj.id} path={obj.path} title={obj.title}/><Slack key={obj.id} id={obj.id} channel={obj.channel} author={obj.author} message={obj.message}/><Tweet key={obj.id} id={obj.id} title={obj.title} date={obj.date}/></div>) : <h1>Loading</h1>
    const renderCal = filteredCalendarData ? filteredCalendarData.map((obj) => <Calendar key={obj.id} id={obj.id} title={obj.title} date={obj.date}/> ) : <h1>Loading</h1>
    const renderContacts = filteredContactsData ? filteredContactsData.map((obj) => <Contacts key={obj.id} id={obj.id} name={obj.name} company={obj.company}/>) : <h1>Loading</h1>
    const renderDropBox = filteredDropBoxData ? filteredDropBoxData.map((obj) => <DropBox key={obj.id} id={obj.id} path={obj.path} title={obj.title}/>) : <h1>Loading</h1>
    const renderSlack = filteredSlackData ? filteredSlackData.map((obj) => <Slack key={obj.id} id={obj.id} channel={obj.channel} author={obj.author} message={obj.message}/>) : <h1>Loading</h1>
    const renderTweet = filteredTweetData ? filteredTweetData.map((obj) => <Tweet key={obj.id} id={obj.id} title={obj.title} date={obj.date}/>) : <h1>Loading</h1>
    
    const [renderData, setRenderData] = useState(renderAll)
    const [loaded, setLoaded] = useState(false)
    console.log(renderData)
    function handleChange(e) {
        setLoaded(true)
        if(e.target.value === "All"){
            setRenderData(renderAll)
        }else if (e.target.value === "Calendar"){
            setRenderData(renderCal) 
        }else if (e.target.value === "Contacts"){
            setRenderData(renderContacts)
        }else if (e.target.value === "DropBox"){
            setRenderData(renderDropBox)
        }else if (e.target.value === "Slack"){
            setRenderData(renderSlack)
        }else if (e.target.value === "Tweet"){
            setRenderData(renderTweet)
        }
    }
    return (
        <div>
            <select name="selction" id="selction" onChange={handleChange}> 
                <option value="All" selected>All</option>
                <option value="Calendar" >Calendar</option>
                <option value="Contacts">Contacts</option>
                <option value="DropBox" >DropBox</option>
                <option value="Slack" >Slack</option>
                <option value="Tweet" >Tweet</option>
            </select>
            <div>
                {!loaded ? renderAll: renderData}
            </div>
        </div>
    )
}

export default Landing
