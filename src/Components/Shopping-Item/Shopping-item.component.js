import React from 'react';
import './shopping-item.styles.scss'
import { connect } from 'react-redux';
import { addedItem, removedItem } from '../../redux/ShopList/ShopActionCreators';


const ShoppingListItem = ({ items, addItemToCart, cmpType, removeItem, type }) => {
    const { id, name, price, img_url, category, discount } = items;
    const addRemoveItem = (event, parameter) => {
        if(parameter === 'removeitem'){
            addItemToCart(items, 'removeItem');
        }
        else if (parameter === 'additem'){
            addItemToCart(items, 'addItem');  
        }
        else {
            event.target.value > items.quantity ?
            addItemToCart(items, 'addItem') :
            addItemToCart(items, 'removeItem');
        }
        
    }

    const removeItemFromCart= (item) => {
        removeItem(item)
    }
    const classes = {card : 'card'}
    if(type === 'shoppingItem'){
        
    }
    else {
        
    }
    return (
        <div className={classes.card}>
            <div className='card-image-container'>
            <img src={img_url} alt='product-image' style={{ width: '100%' }} className='cart-image'/>
            </div>
            <div className='card-textcontainer'>
                <div className='name-price-details'>
                <h4 className = 'cart-item-name'>{name}</h4>
                <div className={`cart-details-container ${classes.cardDetailsContainer}`} >
                    <span>
                        &#x20b9; {price - (price /100*discount)}
                    </span>
                    <span className='add-padding price-cutting'>
                        {price} 
                    </span>
                    <span className='add-padding' style = {{'color' : 'green'}}>
                        <b>{discount} % Off</b>
                    </span>
                </div>
                </div>
                {
                    cmpType === 'shopItem' ? <button className ='add-to-cart-btn' onClick={() => addItemToCart(items, 'addItem')}>Add To Cart</button> :
                        (
                            <div className ='item-count-remove-item'>
                                <div className='add-remove-item'>
                                    <button className ='add-remove-item-btn' onClick={(event) => addRemoveItem(event, 'removeitem')}><i className="fa fa-minus" aria-hidden="true"></i></button>
                                    <input type='number' className ='item-number' value={items.quantity} nim='0' onChange={(event) => addRemoveItem(event)} />
                                    <button 
                                    className ='add-remove-item-btn'
                                    onClick={(event) => addRemoveItem(event, 'additem')}><i className="fa fa-plus" aria-hidden="true" ></i></button>
                                </div>
                                <div>
                                <button className= 'remove-item' onClick={() => removeItemFromCart(items)}>Remove Item</button>
                                </div>
                            </div>
                        )
                }


            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (shopItem, parameter) => dispatch(addedItem(shopItem, parameter)),
        removeItem: (shopItem) => dispatch(removedItem(shopItem))
    }
}

export default connect(null, mapDispatchToProps)(ShoppingListItem);