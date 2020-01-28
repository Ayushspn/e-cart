
export const  apllyUtilityRange = (shopList, range) => {
    let filteredList = [];
    if(shopList && shopList.length >0 ){
        filteredList =  shopList.filter((shopItem) => {
            if(shopItem){
                return shopItem.price > range.min && shopItem.price < range.max;
            }
            
        } )
    }
    return filteredList;
}



export const  apllyUtilityAdditem = (cartItems, addItem, parameter) => {
    const copyCartItems = [...cartItems]
    const existingItem = copyCartItems.findIndex((shopListItem) => shopListItem.id === addItem.id )

    if(existingItem ===-1){
        addItem.quantity = 1;
        copyCartItems.push({...addItem})
    }
    else {
        const cartItemsObj = {...copyCartItems[existingItem]};
        parameter === 'addItem' ? cartItemsObj.quantity = cartItemsObj.quantity + 1 : cartItemsObj.quantity ===1  ? cartItemsObj.quantity =1 : cartItemsObj.quantity = cartItemsObj.quantity -1
        copyCartItems[existingItem] = cartItemsObj;
    }
    return copyCartItems
}


export const  apllyUtilityTotalItemCount = (addItem) => {
    let quantity = 0;
    let totalPrice = 0;
    let totalDiscount = 0;
    addItem.reduce((accumulatedItems, items) => {
        quantity = quantity + items.quantity;
        totalPrice = totalPrice + items.quantity* items.price;
        totalDiscount = totalDiscount + items.quantity * ((items.price/100)* items.discount);
    }, 0)
    return {quantity, totalPrice, totalDiscount};
}


export const removeItem = (cartItems, removedItem) => {
    const copyCartItems = [...cartItems]
    const existingItem = copyCartItems.findIndex((shopListItem) => shopListItem.id === removedItem.id )

    if(existingItem >-1){
        copyCartItems.splice(existingItem, 1);
    }
    
    return copyCartItems
}


export const calculateTotlPriceDiscount = (cartItems, removedItem) => {
    const copyCartItems = [...cartItems]
    const existingItem = copyCartItems.findIndex((shopListItem) => shopListItem.id === removedItem.id )

    if(existingItem >-1){
        copyCartItems.splice(existingItem, 1);
    }
    
    return copyCartItems
}

export const sortByPassedParameter = (shopList, action) => {
    const copyShopList = [...shopList];
    copyShopList.sort(function(previousItem, nextItem) {
    let sortedItem;
    if(action.payload === 'HIGH_TO_LOW' || action.payload === 'LOW_TO_HIGH'){
        action.payload === 'HIGH_TO_LOW' ? sortedItem = parseFloat(nextItem.price) - parseFloat(previousItem.price) 
    : sortedItem = parseFloat(previousItem.price) - parseFloat(nextItem.price) 
    }
    if(action.payload === 'SORT_BY_DISCOUNT'){
        sortedItem = parseFloat(nextItem.discount) - parseFloat(previousItem.discount)  
    }
    
    return sortedItem;
});
return copyShopList;
}


export const searchByTitle = (shopList, searchString) => {
    const searchStringToLowerCase =  searchString.payload.toLowerCase();
    const copyCartList = [...shopList];
   const filteredShopList=  copyCartList.filter((copyCartListItem) => {
        return (copyCartListItem.name.toLowerCase().includes(searchStringToLowerCase))
    })
    return filteredShopList;
}
