import React, {useState} from 'react'
import { useFormik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { pushProject } from '../../actions/searchActions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Seller = () => {
    const dispatch = useDispatch()
    const notify = () => toast("Invalid Time");
    const [startDate, setStartDate] = useState(new Date());
    // const bids = useSelector(state => state.bids.)
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            project: '',
            expiry: '',
            projectDes: '',
        },
        onSubmit: values => {
        console.log(Date.parse(startDate))
            if (Date.parse(startDate) < Date.now()){
                notify()
            }else{
                dispatch(pushProject(JSON.stringify({...values,"tagTime":startDate.toTimeString(), "tagTimeFormatted":Date.parse(startDate)}, null, 2)));
            }
        },
    });

    
    return (
        <div className="container jumbotron">
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="form-control"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="name"
                        type="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="project">project</label>
                    <input
                        className="form-control"
                        id="project"
                        name="project"
                        type="project"
                        onChange={formik.handleChange}
                        value={formik.values.project}
                    />
                </div>

                {/* <div className="form-group">
                    <label htmlFor="expiry">expiry</label>
                    <input
                        className="form-control"
                        id="expiry"
                        name="expiry"
                        type="expiry"
                        placeholder="16/10/2020@10:36:0"
                        onChange={formik.handleChange}
                        value={formik.values.expiry}
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="projectDes">projectDes</label>
                    <textarea
                        className="form-control"
                        id="projectDes"
                        name="projectDes"
                        type="projectDes"
                        onChange={formik.handleChange}
                        value={formik.values.projectDes}
                    />
                </div>
                <div className="form-group">
                <DatePicker 
                    className="form-control"
                    selected={startDate}   
                    showTimeSelect
                    format='dd/MM/YYYY'
                    timeIntervals={1}
                    onChange={date => setStartDate(date)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            
            </div>
    )
}

export default Seller
