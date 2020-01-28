import React from 'react';
import { connect } from 'react-redux';

const CartDetails = ({ cartItemTotalDiscount, cartItemTotalPrice, cartItemCount }) => {
    return (
        
            <div className ='card card-details-chang-height'>
            <h3>Price Details</h3>
            <div>
                <span>Price({cartItemCount} <span>Items</span>)</span> : <span>{cartItemTotalPrice}</span>
            </div>
            <div>
                <span>Discount</span> : <span>{cartItemTotalDiscount}</span>
            </div>

            <div className='container '>
                <b>Total Payable</b> : <span>{cartItemTotalPrice - (cartItemTotalDiscount)}</span>
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