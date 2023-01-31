import React, { Fragment,useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts,searchDrink } from '../store/actions'
import Loading from '../components/Loading'

const Cocktails = () => {
    const {products,loading,err} = useSelector(state=> state.product)
    const dispatch = useDispatch()
    const [search,setSearch] = useState('')


    useEffect(()=>{
        dispatch(fetchProducts())

    },[])

    const Submit = (e)=>{
        e.preventDefault()
        dispatch(searchDrink(search))
        setSearch('')
    }

  return (
    <Fragment>
            <div className="search" id="search">
        <div className="container">
            <form className="form" onSubmit={Submit}>
                <div className="content">
                <div className="title">
                    <h2>Search Your Favorite Cocktail</h2>
                </div>
                <div className="input-control">
                    <input type="text" placeholder='Search for cocktails' onChange={e=> setSearch(e.target.value)} />
                </div>
                </div>
            </form>
        </div>
    </div>
    {loading && <Loading />}

    {err && <div className="error"><h1>Sorry something wrong happened</h1><h2>Try refreshing and check your internet connection</h2></div>}
    {products === null  && <div className="error"><h1>NO COCKTAILS FOUND WITH {search}</h1></div> }
    <div className="cocktails">
        <div className="container">
        {products && products && products.map((drink)=>{
            return (
            <div className="card" key={drink.idDrink}>
                <div className="card-img">
                    <img src={drink.strDrinkThumb} alt={drink.idDrink}/>
                </div>
                <div className="card-body">
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