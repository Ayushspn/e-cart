import {combineReducers} from 'redux';
import shopReducer from './ShopList/ShopReducer'

const rootReducer = combineReducers({
    shop : shopReducer
})

export default rootReducer;