import React from 'react';
import './Sort.styles.scss'
import PriceSort from './Price-Sort/Price-Sort.component';
const Sort = () => {
    return <div className ='sort-container'>
                <span className='mobile-display__none'><b>SORT BY</b> </span>
                <PriceSort renderSortingForMobile = {false}></PriceSort>
            </div>
}

export default Sort;