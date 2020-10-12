import React, {useEffect} from 'react';

import { useSelector, useDispatch} from "react-redux"
import ItemCard from './ItemCard';
import ShoppingSummary from './ShoppingSummary';
import Filter from './Filter'

import {fetchItems, setLoading, sortBy, filterBy, addToCart} from '../../actions/searchActions'

const MainContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading())
        dispatch(fetchItems())
    }, [])

    const state = useSelector(state => state.items)
    const cartItems = useSelector(state => state.items.cart)

    const handleChangeSort = (e) => {
      console.log(e.target.value)
      dispatch(sortBy(e.target.value))
      
    }

    const handleChangeSize = (e) => {
      console.log(e.target.value)
      dispatch(filterBy(e.target.value))
    }

    const handleAddToCart = (e) => {
      // if (e.target.parentNode.children[1].innerText)
      
      if (e.target.className == 'btn btn-primary'){
        let productSKU = e.target.parentNode.children[3].innerText
        // console.log(productSKU)
        dispatch(addToCart(productSKU))

      }
    }

    let content = '';
    // console.log(state)
    content =
    state.loading === false
        ? state.items.products.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))
        : null;



    return (
    <div className="row">
      <div className="col-md-9">
        <div className="row">
          <Filter handleChangeSort={handleChangeSort} handleChangeSize={handleChangeSize}/>
        </div>
        <div className="row" onClick={handleAddToCart}>
        {content}
        </div>
    </div>
      <div className="col-md-3">
        <ShoppingSummary cartItems={cartItems}/>
      </div>
    </div>
    )
    ;
}


export default MainContainer;
