import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import { fetchPokemons } from '../../actions/searchActions'
import PokeCards from './PokeCards'


const Cart = () => {

    console.log("Inside CArt")
    // const changeState = async () => {
    //     await dispatch(fetchPokemons())
    // }
    // useEffect(() => {
    //     changeState()
    // }, [])

    const pokemons = useSelector(state => state.cart.pokemons)
    console.log(pokemons)
    // pokemons && console.log(pokemons.results)
    
    const content = pokemons && pokemons.map((item) => 
        <PokeCards item={item} key={item.name}/>
    )

    return (
        <div className="container">
            <div className="row">
                {content}
            </div>
            
        </div>
    )
}

export default Cart
