import React from 'react'
import { useFormik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { pushBids } from '../../actions/searchActions';

const ProjectDetail = (props) => {
    const projId = props.match.params.id
    // console.log(projId)

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            bidAmt: '',
            bidName: '',
         
        },
        onSubmit: values => {
            dispatch(pushBids(projId, values))

        }
    });
    return (
        <body>

        <div className="container-fluid">
          <div className="row content">
            <div className="col-sm-3 sidenav">
              
            </div>
        
            <div className="col-sm-9">
              <h4><small>Bids</small></h4>
              <hr/>
              <h2>{projId}</h2>
             
              
              {/* <h5><span className="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5> */}
        
              <div className="container jumbotron">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="bidAmt">Bid Amt</label>
                        <input
                            id="bidAmt"
                            name="bidAmt"
                            type="bidAmt"
                            onChange={formik.handleChange}
                            value={formik.values.bidAmt}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bidName">bidName</label>
                        <input
                            id="bidName"
                            name="bidName"
                            type="bidName"
                            onChange={formik.handleChange}
                            value={formik.values.bidName}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            
            </div>
              <br/><br/>
              
              <p><span className="badge">2</span> Comments:</p><br/>
              
        
            </div>
          </div>
        </div>
        
        <footer className="container-fluid">
          <p>Footer Text</p>
        </footer>
        
        </body>
        
    )
}

export default ProjectDetail
