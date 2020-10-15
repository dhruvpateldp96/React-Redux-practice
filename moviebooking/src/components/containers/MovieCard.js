import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({img,title,year, id}) => {
    // console.log(title,year,id)
    return (
        <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={img} alt="Movie Cover" />
          <h5 className="text-light card-title">
            {title} - {year}
          </h5>
          <Link className="btn btn-primary" to={'/movie/' + id}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    )
}

export default MovieCard
