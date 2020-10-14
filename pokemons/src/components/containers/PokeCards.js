import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { addToCart } from '../../actions/cartActions'
import {useSelector, useDispatch} from 'react-redux'


const PokeCards = ({item}) => {
    // console.log(item)
    const [imgUrl, setImgUrl] = useState("")
    useEffect(() => {
        async function fetchImgData() {
        const response = await axios(item.url)
        setImgUrl(response.data.sprites.front_default)
        }
        fetchImgData()
    }, [])

    const dispatch = useDispatch()

    return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-light text-center h-100">
                <img className="mw-100 mh-100 mb-2" src={imgUrl} width="100%" height="100%"/>
                <h5 className="text-dark card-title">
                {item.name}
                </h5>
                <button className="btn btn-outline-secondary" onClick={()=>dispatch(addToCart(item))}>  
                    {/* <span style={{"pointer-events":"none"}}>{item.price}$</span>   */}
                    <h4 
                        style={{"pointerEvents":"none"}} 
                         //item.name and item.url
                    >Add to cart</h4>
                </button>
                {/* <h5 style={{"pointer-events":"none"}}>{item.sku}</h5> */}
                </div>
            </div>
    )
}

export default PokeCards
