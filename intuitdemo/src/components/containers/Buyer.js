import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { removeProject } from '../../actions/searchActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buyer = () => {

    const notify = (message) => toast(message);
    
    const dispatch = useDispatch()
    const [allBids] = useState(useSelector(state => state.projects.bids))
    console.log(allBids)

    const handleTimerEnd = (projectName) => {
        // console.log(allBids[projectName])
        
        // let min = Math.min.apply(Math, allBids[projectName].map(obj => obj.bidAmt));
        
        const min = allBids[projectName] ? allBids[projectName].reduce((prev, current) => (prev.bidAmt < current.bidAmt) ? prev : current) : {bidAmt:"undef", bidName:"No One"}


        // console.log(min)
        // console.log("show the bids")
        notify(`the tender is sold to ${min.bidName} on price ${min.bidAmt}`)
        dispatch(removeProject(projectName))

    }

    const projectList = useSelector(state => state.projects.projects)
    const content = projectList.map((projObj) =>    
                <tr key={projObj.email} >
                    
                    <th scope="row">1</th>
                        <td>{projObj.email}</td>
                        <td>{projObj.name}</td>
                        <Link className="text-lg brand-text" to={'/project/' + projObj.project} style={{ textDecoration: 'none' }}>
                        <td>{projObj.project}</td>
                        </Link>
                        <td>{projObj.tagTime}</td>
                        <td><Countdown date={projObj.tagTimeFormatted} onComplete={() => handleTimerEnd(projObj.project)}/></td>

                </tr>
        
            )
            
    return (
        <div className="container">

            <ToastContainer />

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">name</th>
                    <th scope="col">Project</th>
                    <th scope="col">expiry</th>
                    <th scope="col">Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {content ? content :<h1>Loading</h1>}
                </tbody>
            </table>
        </div>
    )
}

export default Buyer

