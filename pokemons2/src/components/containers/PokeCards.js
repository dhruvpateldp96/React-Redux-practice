import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from '../../actions/searchActions';

const PokeCards = ({pokemon,tag}) => {
    const [imgSrc, setImgSrc] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        async function fetch(){
            // console.log(pokemon)
            const newApi = pokemon.url
            await axios
                .get(newApi)
                .then(res => {
                    setImgSrc(`${res.data.sprites.front_default}`)
                    
                })

        }
        fetch()

    }, [])
    return (
        <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src={imgSrc} alt="Movie Cover" />
                <h5 className="text-light card-title">
                    {pokemon.name}
                </h5>
                <button className="btn btn-primary" onClick={() => tag=="add" ? dispatch(addToCart(pokemon)): dispatch(removeFromCart(pokemon))}>
                    {tag} to Cart
                    <i className="fas fa-chevron-right"/>
                </button>
            </div>
        </div>
    )
}

export default PokeCards
