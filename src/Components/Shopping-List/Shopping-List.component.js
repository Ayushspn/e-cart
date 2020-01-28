import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from '../Shopping-Item/Shopping-item.component';
import './shopping-List.styles.scss';
import {SetSpinnerFlag} from '../../redux/ShopList/ShopActionCreators'

const ShoppingList = ({ ShopItemList, setSpinner}) => {
    useEffect(() => {
        setSpinner(true)
    },[])

    useEffect(() => {
        if(ShopItemList && ShopItemList.length > 0){
           setSpinner(false)
        }
    },[ShopItemList.length])
    return (
        <div className='shopping-list-container'>
        {ShopItemList  &&  ShopItemList.length > 0 ?  ShopItemList.map((items) => {
            return (
                <ShoppingListItem 
                key={items.id} 
                items = {items}
                type = 'shoppingItem' 
                cmpType = 'shopItem'
                />
            )
        })
        : <div className ='no-records'> No Record Found</div>}
        </div>
    )
}

const mapStateToProps = ({ shop: { ShopItemList } }) => {
    return {
        ShopItemList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSpinner : (flag) => dispatch(SetSpinnerFlag(flag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);