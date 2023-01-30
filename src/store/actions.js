import axios from "axios";
import { productActions } from "./store";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
      dispatch(productActions.fetchProducts(data));
    } catch (error) {
      console.log(error);
      dispatch(productActions.fetchProductsError(error));
  }
}
}


export const fetchSingleProduct = (id) => {
  console.log(id)
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        dispatch(productActions.singleFetch(data));
        console.log(data.drinks)
      } catch (err) {
        console.log(err);
        dispatch(productActions.singleFetchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
  }