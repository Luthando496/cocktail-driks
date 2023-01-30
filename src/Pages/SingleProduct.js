import React, { Fragment,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../store/actions'

const SingleProduct = () => {

    const single = useSelector(state=> state.product.singlePro)
    const dispatch = useDispatch()
    const {drinks} = single
    const drink = drinks[0]
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        dispatch(fetchSingleProduct(id))

    },[])
    console.log(drink)
  return (
    <Fragment>
            <div className="back-home">
        <div className="title">
            <Link to={`/cocktails`}>Back Home</Link>
        </div>
    </div>

    <div className="single-product">
        <div className="container">
            <div className="card-img">
                <img src={drink.strDrinkThumb} alt={drink.idDrink} />
            </div>
            <div className="card-content">
                <div className="card-body">
                    <h3>Name : {drink.strDrink}</h3>
                    <h3>Category : {drink.strCategory}</h3>
                    <h3>Info : {drink.strAlcoholic}</h3>
                    <h3>Glass : {drink.strGlass}</h3> 
                    <h3>Instructons: <span>{drink.strInstructions}!</span></h3>
                    <h3>Ingredients :  {drink.strIngredient1} {drink.strIngredient2} {drink.strIngredient3}</h3>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
  )
}

export default SingleProduct