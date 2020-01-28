import React, { useState } from 'react';
import './Price-Sort.styles.scss';
import { connect } from 'react-redux';
import { sortItems } from '../../../redux/ShopList/ShopActionCreators';


const PriceSort = ({ sortShopItems, renderSortingForMobile }) => {
    const [activeClass, setActiveClass] = useState('');
    const [sortingParameter, setSortParameter] = useState('');

    const sortAndSetActiveClass = (parameter) => {
        sortShopItems(parameter);
        setActiveClass(parameter)
    }

    const sortingForMobile = (parameter) => {
        sortShopItems(parameter);
        
    }

    return (
        <>
            <div className='price-sort-container mobile-display__none'>
                <button className={`${activeClass === 'HIGH_TO_LOW' ? 'active' : null} price-sort__button`} onClick={() => sortAndSetActiveClass('HIGH_TO_LOW')}> PRICE HIGH TO LOW</button>
                <button className={`${activeClass === 'LOW_TO_HIGH' ? 'active' : null} price-sort__button`} onClick={() => sortAndSetActiveClass('LOW_TO_HIGH')}> PRICE LOW TO HIGH</button>
                <button className={`${activeClass === 'SORT_BY_DISCOUNT' ? 'active' : null} price-sort__button`} onClick={() => sortAndSetActiveClass('SORT_BY_DISCOUNT')}> DISCOUNT</button>
                <button className='price-sort__button' onClick={() => sortAndSetActiveClass(' ')}> RESET</button>
            </div>
            {renderSortingForMobile ?<div className='desctop-display__none'>
                <div>
                    <label className="container">
                    <input type="radio" name='SORT' onChange = {() => setSortParameter('HIGH_TO_LOW')}/>
                    PRICE HIGH TO LOW
                    </label>
                </div>
                <div>
                    <label className="container">
                    <input type="radio" name='SORT' onChange = {() => setSortParameter('LOW_TO_HIGH')}/>
                    PRICE LOW TO HIGH
                    </label>
                </div>
                <div>
                    <label className="container">
                    <input type="radio" name='SORT' onChange = {() => setSortParameter('SORT_BY_DISCOUNT')}/>
                    DISCOUNT
                    </label>
                </div>
                <button  className = 'apply-rng-btn__modal apply_btn__position' onClick = {() => sortingForMobile(sortingParameter)}>Apply</button>
            </div> : null}
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sortShopItems: (parameter) => dispatch(sortItems(parameter))
    }
}

export default connect(null, mapDispatchToProps)(PriceSort);