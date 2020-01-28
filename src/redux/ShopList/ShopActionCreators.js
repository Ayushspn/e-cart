import * as actionTypes from './ShopList.action.types'
import * as apiURL from '../../APIURL';

const ShopListSuccess = shopList => ({
    type: actionTypes.FETCH_CART_LIST,
    payload: shopList
  });

  export const   SetSpinnerFlag = spinnerFlag => ({
    type: actionTypes.SET_SPINNER_FLAG,
    payload: spinnerFlag
  });

export const fetchShopList = () => {
    return dispatch => {
        fetch(apiURL.fetchCartItemsURL)
        .then(response => response.json())
        .then(data => {
            dispatch(ShopListSuccess(data));
        }
        )
        .catch(error => console.log(error));
  };
}

export const ApplyFilter = (filterRange) => ({
  type: actionTypes.APPLY_RANGE,
  payload: filterRange
})

export const addedItem = (cartItem, parameter) => ({
  type: actionTypes.ADD_ITEM,
  value: {cartItem, parameter}
})

export const removedItem = (cartItem) => ({
  type: actionTypes.REMOVE_ITEM,
  payload : cartItem
})


export const sortItems = (parameter) => ({
  type: actionTypes.SORT_ITEM,
  payload : parameter
})


export const searchTitle = (searchString) => ({
  type: actionTypes.SEARCH_STRING,
  payload : searchString
})

export const searchTitleInCartItem = (searchString) => ({
  type: actionTypes.SEARCH_STRING_CART_ITEM,
  payload : searchString
})
