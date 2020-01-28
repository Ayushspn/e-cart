import React, {useState, useEffect} from 'react';
import './search.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchTitle, searchTitleInCartItem} from '../../redux/ShopList/ShopActionCreators';

const Search = ({searchForTitle, history, searchTitleInCartItems}) => {
    const [searchTxt, setSearchTxt] = useState('');
    const [searchCartTxt, setSearchCartTxt] = useState('');
    const inputChangeHandle = (event) => {
        setSearchTxt(event.target.value)
        searchForTitle(event.target.value)
    }

    const inputChangeHandleForCartItem = (event) => {
        setSearchCartTxt(event.target.value)
        searchTitleInCartItems(event.target.value)
    }

    useEffect(() => {
        setSearchTxt('')
        setSearchCartTxt('')
    },[])
    
    return (
        
        <div className ='search-icon'>
            {history.location.pathname === '/' ? 
            <input className ='form-control search-box' type='search' value = {searchTxt} onChange = {(event) => inputChangeHandle(event)}
            ></input>
            :
            <input className ='form-control search-box' type='search' value = {searchCartTxt} onChange = {(event) => inputChangeHandleForCartItem(event)}
            ></input>
            }
            <i className="fa fa-search serach-button" aria-hidden="true"></i>
        </div>
            
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForTitle : (title) => dispatch(searchTitle(title)),
        searchTitleInCartItems : (title) => dispatch(searchTitleInCartItem(title))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Search));