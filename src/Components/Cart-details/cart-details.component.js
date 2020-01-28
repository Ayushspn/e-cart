import React from 'react';
import { connect } from 'react-redux';

const CartDetails = ({ cartItemTotalDiscount, cartItemTotalPrice, cartItemCount }) => {
    return (
        
            <div className ='card card-details-chang-height'>
            <h3 className ='priceDetails'>PRICE DETAILS</h3>
            <div>
                <span className ='cart-details-item'>Price({cartItemCount} <span>Items</span>)</span> : <span className ='cart-details-item'><span> &#x20b9;</span>{cartItemTotalPrice}</span>
            </div>
            <div>
                <span className ='cart-details-item'>Discount</span> : <span className ='cart-details-item'><span> &#x20b9;</span>{cartItemTotalDiscount}</span>
            </div>

            <div className='container'>
                <span className ='cart-details-item'> <b>Total Payable</b></span> : <span className ='cart-details-item'><span> &#x20b9;</span>{cartItemTotalPrice - (cartItemTotalDiscount)}</span>
            </div>
            </div>
        
    )
}

const mapsStateToProps = ({ shop: { cartItemTotalPrice, cartItemTotalDiscount, cartItemCount } }) => {
    return {
        cartItemTotalPrice,
        cartItemTotalDiscount,
        cartItemCount
    }
}

export default connect(mapsStateToProps)(CartDetails);