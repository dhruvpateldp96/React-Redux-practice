import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingSummary = ({cartItems}) => {
    // cartItems&& console.log(cartItems[0])
    // console.log(cartItems)
    return (
      <div className="row m-30">
        <div className="card card-body bg-dark text-center h-100">
            
            <ul className="text-light card-title">
                {cartItems.map((item) => <li>{item[0].title}</li>)}
            </ul>
          <h5 className="text-light card-title">
          </h5>
          <button className="btn btn-primary" >  {/* to={'/movie/' + movie.imdbID} */}
            Checkout
          </button>
        </div>
      </div>
    );
}

export default ShoppingSummary