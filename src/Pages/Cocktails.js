import React, { Fragment,useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../store/actions'


const Cocktails = () => {
    const products = useSelector(state=> state.product.products)
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')


    useEffect(()=>{
        dispatch(fetchProducts())

    },[])
  return (
    <Fragment>
            <div class="search" id="search">
        <div class="container">
            <form class="form">
                <div class="content">
                <div class="title">
                    <h2>Search Your Favorite Cocktail</h2>
                </div>
                <div class="input-control">
                    <input type="text" placeholder='Search for cocktails' onChange={e=> setSearch(e.target.value)} />
                </div>
                </div>
            </form>
        </div>
    </div>


    <div class="cocktails">
        <div class="container">
        {products && products.drinks && products.drinks.map((drink)=>{
            return (
            <div class="card" key={drink.idDrink}>
                <div class="card-img">
                    <img src={drink.strDrinkThumb} alt={drink.idDrink}/>
                </div>
                <div class="card-body">
                    <h1>A1</h1>
                    <h2>{drink.strGlass}</h2>
                    <h3>{drink.strAlcoholic}</h3>
                    <h4>{drink.strCategory}</h4>
                    <h5>{drink.strDrink}</h5>
                    <Link to={`/cocktail/${drink.idDrink}`}>Details</Link>
                </div>
            </div>

            )
        })}
        </div>
        
    </div>
    </Fragment>
  )
}

export default Cocktails