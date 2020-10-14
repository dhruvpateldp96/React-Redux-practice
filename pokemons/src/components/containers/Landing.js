import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchPokemons } from '../../actions/searchActions'
import PokeCards from './PokeCards'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';


const Landing = () => {

    const dispatch = useDispatch()
    
    const changeState = () => {
        dispatch(fetchPokemons())
    }
    useEffect(() => {
        changeState()
    }, [])

    const pokemons = useSelector(state => state.pokemons.pokemons.results)
    console.log(pokemons)
    // pokemons && console.log(pokemons.results)
    
    const content = pokemons && pokemons.map((item) => 
        <PokeCards item={item} key={item.name}/>
    )

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        dispatch(fetchPokemons(page))
    };

    let count = parseInt(1050/20)

    return (
        <div className="container">
            <div className="row">
                {content}
            </div>
            <div className="row">
                <Typography>Page: {page}</Typography>
                <Pagination count={count} page={page} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Landing
