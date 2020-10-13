import React from 'react';
import { useFormik } from 'formik';
import {useSelector, useDispatch} from "react-redux"
import {createContact} from "../../actions/searchActions"

const Form = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
        email: '',
        },
        onSubmit: values => {
        // alert(JSON.stringify(values, null, 2));
        console.log(values)
        dispatch(createContact(values))
        },
    });
    return (
        <form  onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Name</label>
        <input
            className="form-control"
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            value={formik.values.name}
        />
        <label htmlFor="email">Phone</label>
        <input
            className="form-control"
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
        />
        <label htmlFor="email">Email</label>
        <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />
        
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Form