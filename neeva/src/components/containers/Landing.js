import React, {useEffect} from 'react'
import Footer from "../layouts/Footer"  
import Navbar from "../layouts/Navbar"  
import { fetchCalendarData, fetchContactsData, fetchDropboxData, fetchSlackData, fetchTweetData } from '../../actions/searchActions'
import {useSelector, useDispatch} from 'react-redux'
import Jumbotron from '../layouts/Jumbotron'

const Landing = () => {
    // const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCalendarData());
        dispatch(fetchContactsData());
        dispatch(fetchDropboxData());
        dispatch(fetchSlackData());
        dispatch(fetchTweetData());
        }, [])

    
    const calendar = useSelector(state => state.data.calendar)
    const contacts = useSelector(state => state.data.contacts)
    const dropbox = useSelector(state => state.data.dropbox)
    const slack = useSelector(state => state.data.slack)
    const tweet = useSelector(state => state.data.tweet)
    const allResults = [...calendar, ...contacts, ...dropbox, ...slack, ...tweet]
    const filter = useSelector(state => state.data.filters)

    console.log(allResults);

    //objects.map(obj => obj.matchingTerms)
    const filteredData = allResults ? allResults.filter(obj => obj.matching_terms.includes(filter)) : [] //
    // console.log(fi)
    return (
        <div>
            {filteredData ? filteredData.map((obj) => <Jumbotron obj={obj}/>) : <h1>Loading</h1>}
        </div>
    )
}

export default Landing
