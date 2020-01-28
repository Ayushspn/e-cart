import * as actionTypes from './ShopList.action.types'
import {
    apllyUtilityRange, apllyUtilityAdditem,
    apllyUtilityTotalItemCount,
    removeItem,
    sortByPassedParameter,
    searchByTitle
} from './ShopUtility';
const INITIALSTATE = {
    ShopItemList: [],
    copyShopItemList: [],
    copyCartListItem : [],
    cartItems: [],
    cartItemCount: 0,
    totalPrice: 0,
    totalDiscount: 0,
    spinnerFlag: false
}

const shopReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_LIST:
            return {
                ...state,
                ShopItemList: action.payload,
                copyShopItemList: action.payload
            }

        case actionTypes.APPLY_RANGE:
            const copyDataFilter = [...state.copyShopItemList]
            const rangeBasedFilter = apllyUtilityRange(copyDataFilter, action.payload);
            return {
                ...state,
                ShopItemList: rangeBasedFilter
            }

        case actionTypes.ADD_ITEM:
            let countItems = 0;
            const addItemToCart = apllyUtilityAdditem(state.cartItems, action.value.cartItem, action.value.parameter);
            if (addItemToCart && addItemToCart.length > 0) {
                countItems = apllyUtilityTotalItemCount(addItemToCart);
            }
            return {
                ...state,
                cartItems: addItemToCart,
                copyCartListItem : addItemToCart,
                cartItemCount: countItems.quantity,
                cartItemTotalPrice: countItems.totalPrice,
                cartItemTotalDiscount: countItems.totalDiscount
            }

        case actionTypes.REMOVE_ITEM:
            let countRemoveItems = 0;
            const removedItems = removeItem(state.cartItems, action.payload);
            if (removedItems && removedItems.length > 0) {
                countRemoveItems = apllyUtilityTotalItemCount(removedItems);
            }
            return {
                ...state,
                cartItems: removedItems,
                copyCartListItem : removedItems,
                cartItemCount: countRemoveItems.quantity,
                cartItemTotalPrice: countRemoveItems.totalPrice,
                cartItemTotalDiscount: countRemoveItems.totalDiscount
            }

        case actionTypes.SORT_ITEM:
            const shopList = state.ShopItemList;
            if (action.payload && action.payload.length > 1) {
                const sortedShopList = sortByPassedParameter(shopList, action);
                return {
                    ...state,
                    ShopItemList: sortedShopList
                }
            }
            else {
                const resetSortBy = [...state.copyShopItemList]
                return {
                    ...state,
                    ShopItemList: resetSortBy

                }
            }

        case actionTypes.SET_SPINNER_FLAG:
            return {
                ...state,
                spinnerFlag: action.payload
            }

        case actionTypes.SEARCH_STRING:
            const searchShopList = state.copyShopItemList;
            const searchedShopList = searchByTitle(searchShopList, action);
            return {
                ...state,
                ShopItemList: searchedShopList
            }


        case actionTypes.SEARCH_STRING_CART_ITEM:
            const cartListList = state.copyCartListItem;
            const searchedCartListList = searchByTitle(cartListList, action);
            console.log(searchedCartListList)
            return {
                ...state,
                cartItems: searchedCartListList
            }

        default:
            return state
    }

}

export default shopReducer;